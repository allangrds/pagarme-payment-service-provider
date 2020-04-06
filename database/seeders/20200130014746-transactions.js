const uuidv4 = require('uuid/v4')

module.exports = {
  up: queryInterface => (
    queryInterface.bulkInsert('Transactions', [{
      transaction_id: uuidv4('123'),
      amount: 10000,
      user_id: '1',
      description: 'Descrição da transação',
      payment_method: 'credit_card',
      card_last_digits: '1234',
      card_expiration_date: '1021',
      card_cvv: '123',
      card_holder_name: 'Jose R. Silva',
      created_at: new Date(),
      updated_at: new Date(),
    }], {})
  ),

  down: queryInterface => (
    queryInterface.bulkDelete('Transactions', null, {})
  ),
}
