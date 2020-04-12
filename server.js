require('dotenv').config()

const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const helmet = require('helmet')

const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

const app = express()
const port = process.env.PORT

app.use(helmet())
app.use(logger('dev'))
app.disable('x-powered-by')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(routes)

app.get('*', (req, res) => (
  res.status(404).json({
    status_code: 404,
    message: 'Not found',
  })
))

app.use(errorHandler)

app.listen(port, () => (
  console.log(`Example app listening on port ${port}!`) // eslint-disable-line no-console
))
