require("dotenv").config();
const express = require("express");
const util = require("util");
const fs = require("fs").promises;
const cron = require("node-cron");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
const { Op } = require("sequelize");
const sequelize = require("./config/database");
const Event = require("./models").Event;
const Participant = require("./models").Participant;

app.use(express.json());
app.use(cors());

app.get("/events/participants", async (req, res) => {
  try {
    const eventId = parseInt(req.query.eventId);
    if (!eventId) {
      res.status(500).json({ error: "no event id param" });
      return;
    }

    const event = await Event.findByPk(eventId);
    const participants = await event.getParticipants();

    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 7);
    const endDate = new Date();

    const registrationsPerWeek = await Participant.findAll({
      attributes: [
        [sequelize.fn("DATE", sequelize.col("createdAt")), "registrationDate"],
        [sequelize.fn("COUNT", sequelize.col("id")), "registrationCount"],
      ],
      where: {
        eventId: eventId,
        createdAt: {
          [Op.between]: [startDate, endDate],
        },
      },
      group: [sequelize.fn("DATE", sequelize.col("createdAt"))],
      raw: true,
    });
    res.json({
      participants: participants,
      registrationsPerWeek: registrationsPerWeek,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error });
  }
});

app.get("/events", async (req, res) => {
  try {
    /*деструктуризація параметрів запиту*/
    const page = parseInt(req.query._page) || 1;
    const limit = parseInt(req.query._limit) || 6;

    /*підрахунок загальної кількості можливих сторінок*/
    const totalCount = await Event.count();
    const totalPages = Math.ceil(totalCount / limit);
    const offset = (page - 1) * limit;

    const events = await Event.findAll({
      offset,
      limit,
      include: {
        model: Participant,
        as: "participants",
      },
    });
    res.json({ totalPages: totalPages, events });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error });
  }
});

app.post("/participant", async (req, res) => {
  try {
    const newParticipant = req.body;
    const result = await Participant.create(newParticipant);
    res.json({ result: result });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// запуск задачі крон

let currentPortion = 1;
const task = async () => {
  try {
    axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _page: currentPortion,
        },
      })
      .then((response) => {
        if (response.data == []) {
          currentPortion = 1;
        } else {
          const adaptedData = response.data.map((element) => {
            return {
              title: element.title,
              description: element.body,
              eventdate: new Date().toISOString().split("T")[0],
              organizer: element.title,
            };
          });
          Event.bulkCreate(adaptedData);
          currentPortion++;
        }
      });
  } catch (err) {
    console.error("Error:", err);
  }
};

cron.schedule("0 0 * * *", task);
