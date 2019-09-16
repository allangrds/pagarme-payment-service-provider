const { Router } = require('express')
const { index, show } = require('../controllers/transactions')

const router = Router()

router.get(
  '/transactions',
  index
)

router.get(
  '/transactions/:id',
  show
)

module.exports = router
