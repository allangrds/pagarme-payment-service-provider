require('dotenv').config()

const database = {
  [process.env.NODE_ENV]: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    operatorsAliases: false,
    dialectOptions: {
      useUTC: false,
    },
    timezone: '-03:00',
  },
}

module.exports = database
