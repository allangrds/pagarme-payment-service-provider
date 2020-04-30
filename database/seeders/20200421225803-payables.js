const uuidv4 = require('uuid/v4')

module.exports = {
  up: queryInterface => (
    queryInterface.bulkInsert('Payables', [{
      payable_id: uuidv4('123'),
      transaction_id: '1',
      user_id: '1',
      status: 'paid',
      payment_date: new Date(),
      fee_percent: 3,
      fee_value: 3,
      amount: 97,
      created_at: new Date(),
      updated_at: new Date(),
    }], {})
  ),

  down: queryInterface => (
    queryInterface.bulkDelete('Payables', null, {})
  ),
}
