const { Router } = require('express')
const { index, show, create } = require('../app/controllers/payables')
const validator = require('../middlewares/validator')
const schema = require('../middlewares/validator/payables')

const router = Router()

router.get(
  '/payables',
  index
)

router.post(
  '/payables',
  validator(schema),
  create
)

router.get(
  '/payables/:id',
  show
)

module.exports = router
