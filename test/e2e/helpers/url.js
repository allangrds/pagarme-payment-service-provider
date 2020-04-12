require('dotenv').config()

const port = process.env.PORT
const url = `http://localhost:${port}`

module.exports = url
