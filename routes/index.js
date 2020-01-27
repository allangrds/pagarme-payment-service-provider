const { Router } = require('express')
const transactionsRouter = require('./transactions')
const payablesRouter = require('./payables')
const usersRouter = require('./users')

const router = Router()

router.use(payablesRouter)
router.use(usersRouter)
router.use(transactionsRouter)

module.exports = router
