const bcrypt = require('bcryptjs')
const uuidv4 = require('uuid/v4')

function getRandomArbitrary (min, max) {
  return Math.random() * (max - min) + min
}

module.exports = (sequelize, DataTypes) => {
  const hooks = {
    beforeCreate: (user) => {
      const uuidString = user.password
        + user.email
        + getRandomArbitrary(0, 10000)

      user.api_key = uuidv4(uuidString) // eslint-disable-line no-param-reassign
      user.password = bcrypt.hashSync(user.password, 10) // eslint-disable-line no-param-reassign
    },
    beforeUpdate: (user) => {
      user.updated_at = new Date() // eslint-disable-line no-param-reassign
    },
  }

  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    api_key: {
      type: DataTypes.STRING,
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

  return User
}
