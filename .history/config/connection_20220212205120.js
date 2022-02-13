const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      user: 'root',
      password: 'parent: Error: connect ECONNREFUSED 127.0.0.1:3006
      at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1161:16) {'
      port: 3006
    });

module.exports = sequelize;
