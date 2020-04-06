module.exports = {
  up: (queryInterface, DataTypes) => (
    queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'Users', key: 'id' },
      },
      transaction_id: {
        allowNull: false,
        type: DataTypes.UUID,
        unique: true,
      },
      amount: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      description: {
        allowNull: true,
        type: DataTypes.STRING(200),
      },
      payment_method: {
        allowNull: false,
        type: DataTypes.ENUM(['debit_card', 'credit_card']),
      },
      card_last_digits: {
        allowNull: false,
        type: DataTypes.STRING(4),
      },
      card_expiration_date: {
        allowNull: false,
        type: DataTypes.STRING(4),
      },
      card_cvv: {
        allowNull: false,
        type: DataTypes.STRING(3),
      },
      card_holder_name: {
        allowNull: false,
        type: DataTypes.STRING(30),
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
    queryInterface.dropTable('Transactions')
  ),
}
