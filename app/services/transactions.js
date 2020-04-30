const { omit } = require('ramda')

const models = require('../models')
const { Transaction } = require('../repositories')
const PayableService = require('./payables')

const getCardNumberLastDigits = cardNumber => (
  cardNumber.substring(
    cardNumber.length - 4,
    cardNumber.length + 4
  )
)

const create = async (req) => {
  const {
    amount,
    description,
    payment_method,
    card_number,
    card_holder_name,
    card_expiration_date,
    card_cvv,
    user_id,
  } = req.body

  let transaction
  const cardLastDigits = getCardNumberLastDigits(card_number)

  try {
    transaction = await models.sequelize.transaction()

    const createdTransaction = await Transaction.create({
      amount,
      description,
      payment_method,
      card_last_digits: cardLastDigits,
      card_holder_name,
      card_expiration_date,
      card_cvv,
      user_id,
    })

    await PayableService.create(
      payment_method,
      amount,
      createdTransaction.id,
      user_id
    )

    await transaction.commit()

    const filteredTransaction = omit(['id'], createdTransaction)

    return filteredTransaction
  } catch (error) {
    if (transaction) {
      await transaction.rollback()
    }

    throw new Error(error)
  }
}

module.exports = { create }
