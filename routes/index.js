const { Router } = require('express')
const transactionsRouter = require('./transactions')
const resumeRouter = require('./resume')
const usersRouter = require('./users')

const router = Router()

router.use(resumeRouter)
router.use(usersRouter)
router.use(transactionsRouter)

module.exports = router
