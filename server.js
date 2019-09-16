require('dotenv').config()

const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const routes = require('./routes')

const app = express()
const port = 3002

app.use(logger('dev'))
app.disable('x-powered-by')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(routes)

app.get('/', (req, res) => res.status(200).json({ message: 'Hello World' }))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
