require('dotenv').config()

const database = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: 'database',
    dialect: 'mysql',
    operatorsAliases: false,
    dialectOptions: {
      useUTC: false,
    },
    timezone: '-03:00',
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: 'database',
    dialect: 'mysql',
    operatorsAliases: false,
    dialectOptions: {
      useUTC: false,
    },
    timezone: '-03:00',
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: 'database',
    dialect: 'mysql',
    operatorsAliases: false,
    dialectOptions: {
      useUTC: false,
    },
    timezone: '-03:00',
  },
}

module.exports = database
