const uuidv4 = require('uuid/v4')

function getRandomArbitrary (min, max) {
  return Math.random() * (max - min) + min
}

module.exports = (sequelize, DataTypes) => {
  const hooks = {
    beforeCreate: (transaction) => {
      const uuidString = transaction.user_id
        + transaction.amount
        + getRandomArbitrary(0, 10000)

      transaction.transaction_id = uuidv4(uuidString) // eslint-disable-line no-param-reassign
    },
    beforeUpdate: (transaction) => {
      transaction.updated_at = new Date() // eslint-disable-line no-param-reassign
    },
  }

  const Transaction = sequelize.define('Transaction', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users', key: 'id' },
    },
    transaction_id: {
      type: DataTypes.UUID,
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
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: 'created_at',
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: 'updated_at',
    },
  }, {
    hooks,
    timestamps: false,
  })

  return Transaction
}
