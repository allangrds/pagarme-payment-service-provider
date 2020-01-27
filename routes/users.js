const { Router } = require('express')
const { create, index } = require('../app/controllers/users')

const validator = require('../middlewares/validator')
const authenticateWithEmailAndPassword = require('../middlewares/authenticateWithEmailAndPassword')
const schema = require('../middlewares/validator/users')

const router = Router()

router.post(
  '/users',
  validator(schema),
  create
)

router.get(
  '/users',
  authenticateWithEmailAndPassword,
  index
)

module.exports = router
