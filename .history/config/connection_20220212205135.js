const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      user: 'root',
      password: '5x)Q>3K=hfuVJ3_}'
      port: 3006
    });

module.exports = sequelize;
