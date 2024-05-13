# Backend

This is a basic server setup for a test task. The following technologies are used:
- express.js
- axios
- sequelize ORM
- dotenv
- cron

## Local Setup

To run this project locally, you must have an SQL server installed.

### Installation Steps:

1. Install dependencies:
   ```bash
   npm install
   
2. Perform database migrations:
   ```bash
   npx sequelize-cli db:migrate
   

**Important: This project was developed using a MySQL server. If you are using MariaDB or another SQL server, you will need to download an adapter for your database and specify the correct dialect in the config/config.json file. More information on configuring Sequelize can be found [here](https://sequelize.org/docs/v6/other-topics/dialect-specific-things/).**

3.Seed the database:

   ```bash
   npx sequelize-cli db:seed:all
```
4.Run the application using nodemon:
   ```bash
   npm run dev
```
Ensure that your environment variables are set up correctly in the .env file before running the application.
