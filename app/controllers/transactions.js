const { Transaction } = require('../repositories')
const transactionsService = require('../services/transactions')

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
  const createdTransaction = await transactionsService.create(req)

  return res.status(201).json(createdTransaction)
}

module.exports = { index, create }
