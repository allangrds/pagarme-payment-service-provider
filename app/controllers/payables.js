const index = (req, res) => {
  const payables = {
    current_page: 0,
    per_page: 10,
    total: 20,
    results: [
      {
        id: 'pyb_123',
        status: 'paid',
        payment_date: '2019-11-08-10:05:55',
        amount: 1000,
        fee: 100,
        transaction_id: 'trs_1234',
        created_at: '2019-10-18-10:05:55',
      },
    ],
  }

  return res.status(200).json(payables)
}

const show = (req, res) => {
  const payable = {
    id: 'trs_1234',
    description: 'Essa é uma transação',
    payment_method: 'debit_card',
    last_card_digits: '0569',
    card_holder_name: 'João da Silva Sauro',
    card_expiration_date: '0520',
    transaction_id: 'trs_1234',
    created_at: '2019-10-18-10:05:55',
  }

  return res.status(200).json(payable)
}

const create = (req, res) => {
  const payable = {
    id: 'trs_1234',
    description: 'Essa é uma transação',
    payment_method: 'debit_card',
    last_card_digits: '0569',
    card_holder_name: 'João da Silva Sauro',
    card_expiration_date: '0520',
    transaction_id: 'trs_1234',
    created_at: '2019-10-18-10:05:55',
  }

  return res.status(201).json(payable)
}

module.exports = { index, show, create }
