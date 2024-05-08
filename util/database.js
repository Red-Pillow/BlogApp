// util/database.js
const { Sequelize } = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USERNAME,process.env.DB_PASSWORD,{
    dialect: "mysql",
    host: process.env.DB_HOSTNAME,
    port: 3306
});

module.exports = sequelize;
