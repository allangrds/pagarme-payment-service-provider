require('dotenv').config()

const database = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: 'database',
    dialect: 'mysql',
    operatorsAliases: false,
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: 'database',
    dialect: 'mysql',
    operatorsAliases: false,
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: 'database',
    dialect: 'mysql',
    operatorsAliases: false,
  },
}

module.exports = database
