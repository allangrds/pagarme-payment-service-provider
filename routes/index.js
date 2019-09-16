const { Router } = require('express')
const transactionsRouter = require('./transactions')
const payablesRouter = require('./payables')

const router = Router()

router.use(transactionsRouter)
router.use(payablesRouter)

module.exports = router
