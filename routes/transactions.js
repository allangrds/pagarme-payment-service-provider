const { Router } = require('express')
const { index, create } = require('../app/controllers/transactions')

const validator = require('../middlewares/validator')
const schema = require('../middlewares/validator/transactions')
const authenticateWithApiKey = require('../middlewares/authenticateWithApiKey')

const router = Router()

router.get(
  '/transactions',
  authenticateWithApiKey,
  index
)

router.post(
  '/transactions',
  authenticateWithApiKey,
  validator(schema),
  create
)

module.exports = router
