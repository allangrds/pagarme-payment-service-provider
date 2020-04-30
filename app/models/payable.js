const uuidv4 = require('uuid/v4')

function getRandomArbitrary (min, max) {
  return Math.random() * (max - min) + min
}

module.exports = (sequelize, DataTypes) => {
  const hooks = {
    beforeCreate: (payable) => {
      const uuidString = payable.transaction_id
        + payable.amount
        + getRandomArbitrary(0, 10000)

      payable.payable_id = uuidv4(uuidString) // eslint-disable-line no-param-reassign
    },
    beforeUpdate: (payable) => {
      payable.updated_at = new Date() // eslint-disable-line no-param-reassign
    },
  }

  const Payable = sequelize.define('Payable', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    payable_id: {
      type: DataTypes.UUID,
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

  return Payable
}
