const { Router } = require('express')
const { index, show } = require('../controllers/payables')

const router = Router()

router.get(
  '/payables',
  index
)

router.get(
  '/payables/:id',
  show
)

module.exports = router
