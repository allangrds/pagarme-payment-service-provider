const { Transaction } = require('../models')
const baseRepository = require('./base')

const transactionRepository = {
  create: (values) => {
    const attributes = [
      'id',
      'transaction_id',
      'amount',
      'description',
      'payment_method',
      'card_last_digits',
      'card_holder_name',
      'card_expiration_date',
      'created_at',
    ]

    return baseRepository.create(Transaction, attributes, values)
  },
  findAll: (page, userId) => {
    const attributes = [
      'transaction_id',
      'amount',
      'description',
      'payment_method',
      'card_last_digits',
      'card_holder_name',
      'card_expiration_date',
      'created_at',
    ]

    return baseRepository.findAll(
      Transaction,
      attributes,
      page,
      userId
    )
  },
}

module.exports = transactionRepository
