const index = (req, res) => {
  const transactions = {
    current_page: 0,
    per_page: 10,
    total: 20,
    results: [
      {
        id: 'trs_1234',
        amount: 1000,
        description: 'Essa é uma transação',
        payment_method: 'debit_card',
        last_card_digits: '0569',
        card_holder_name: 'João da Silva Sauro',
        card_expiration_date: '0520',
        created_at: '2019-10-18-10:05:55',
      },
    ],
  }

  return res.status(200).json(transactions)
}

const show = (req, res) => {
  const transaction = {
    id: 'trs_1234',
    amount: 1000,
    description: 'Essa é uma transação',
    payment_method: 'debit_card',
    last_card_digits: '0569',
    card_holder_name: 'João da Silva Sauro',
    card_expiration_date: '0520',
    created_at: '2019-10-18-10:05:55',
  }

  return res.status(200).json(transaction)
}

const create = (req, res) => {
  const transaction = {
    id: 'trs_1234',
    amount: 1000,
    description: 'Essa é uma transação',
    payment_method: 'debit_card',
    last_card_digits: '0569',
    card_holder_name: 'João da Silva Sauro',
    card_expiration_date: '0520',
    created_at: '2019-10-18-10:05:55',
  }

  return res.status(201).json(transaction)
}

module.exports = { index, show, create }
