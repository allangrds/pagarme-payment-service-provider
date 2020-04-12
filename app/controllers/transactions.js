const { Transaction } = require('../repositories')
const TransactionsService = require('../services/transactions')

const index = async (req, res) => {
  const { page } = req.query
  const { user_id: userId } = req.body

  const transactions = await Transaction.findAll(
    page,
    userId
  )

  return res.status(200).json(transactions)
}

const create = async (req, res) => {
  const createdUser = await TransactionsService(req)

  return res.status(201).json(createdUser)
}

module.exports = { index, create }
