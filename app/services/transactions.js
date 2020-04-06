const { Transaction } = require('../repositories')

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

  const cardLastDigits = card_number.substring(
    card_number.length - 4,
    card_number.length + 4
  )

  const createdUser = await Transaction.create({
    amount,
    description,
    payment_method,
    card_last_digits: cardLastDigits,
    card_holder_name,
    card_expiration_date,
    card_cvv,
    user_id,
  })

  return createdUser
}

module.exports = create
