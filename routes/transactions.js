const { Router } = require('express')
const { index, show, create } = require('../app/controllers/transactions')

const validator = require('../middlewares/validator')
const schema = require('../middlewares/validator/transactions')

const router = Router()

router.get(
  '/transactions',
  index
)

router.post(
  '/transactions',
  validator(schema),
  create
)

router.get(
  '/transactions/:id',
  show
)

module.exports = router
