const { Router } = require('express')
const { index } = require('../app/controllers/resume')
const authenticateWithApiKey = require('../middlewares/authenticateWithApiKey')

const router = Router()

router.get(
  '/resume',
  authenticateWithApiKey,
  index
)

module.exports = router
