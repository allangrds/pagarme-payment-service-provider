const express = require('express')
const logger = require('morgan')
const app = express()
const port = 3002

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => res.status(200).json({ message: 'Hello World' }))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))