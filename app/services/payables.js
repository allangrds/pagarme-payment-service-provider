const dayjs = require('dayjs')
const dinero = require('dinero.js')

const { Payable } = require('../repositories')

const getStatus = (paymentMethod) => {
  const status = {
    debit_card: 'paid',
    credit_card: 'waiting_funds',
  }

  return status[paymentMethod]
}

const getPaymentDate = (paymentMethod) => {
  const today = dayjs()

  const paymentDate = {
    debit_card: today,
    credit_card: today.add(30, 'day'),
  }

  return paymentDate[paymentMethod]
}

const getFeePercent = (paymentMethod) => {
  const fees = {
    debit_card: 3,
    credit_card: 5,
  }

  return fees[paymentMethod]
}

const create = async (paymentMethod, amount, id, userId) => {
  try {
    const status = getStatus(paymentMethod)
    const paymentDate = getPaymentDate(paymentMethod)
    const feePercent = getFeePercent(paymentMethod)

    const feeValue = (
      dinero({ amount })
        .percentage(feePercent)
        .getAmount()
    )
    const newAmount = dinero({ amount })
      .percentage(100 - feePercent)
      .getAmount()

    return Payable.create({
      transaction_id: id,
      status,
      payment_date: paymentDate,
      fee_percent: feePercent,
      fee_value: feeValue,
      amount: newAmount,
      user_id: userId,
    })
  } catch (error) {
    return error
  }
}

module.exports = { create }
