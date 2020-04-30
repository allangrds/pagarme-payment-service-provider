module.exports = {
  up: (queryInterface, DataTypes) => (
    queryInterface.createTable('Payables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      transaction_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'Transactions', key: 'id' },
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'Users', key: 'id' },
      },
      payable_id: {
        allowNull: false,
        type: DataTypes.UUID,
        unique: true,
      },
      status: {
        allowNull: false,
        type: DataTypes.ENUM(['paid', 'waiting_funds']),
      },
      payment_date: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      fee_percent: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      fee_value: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      amount: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    })
  ),

  down: queryInterface => (
    queryInterface.dropTable('Payables')
  ),
}
