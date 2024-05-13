"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Participant extends Model {
    static associate(models) {
      Participant.belongsTo(models.Event, {
        foreignKey: "eventId",
        as: "event",
      });
    }
  }
  Participant.init(
    {
      fullname: DataTypes.STRING,
      email: DataTypes.STRING,
      birth: DataTypes.STRING,
      source: DataTypes.STRING,
      eventId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Participant",
    }
  );
  return Participant;
};
