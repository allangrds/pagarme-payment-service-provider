const bcrypt = require('bcryptjs')
const uuidv4 = require('uuid/v4')

function getRandomArbitrary (min, max) {
  return Math.random() * (max - min) + min
}

module.exports = (sequelize, DataTypes) => {
  const hooks = {
    beforeCreate: (user) => {
      const uuidString = user.password + getRandomArbitrary(0, 100)

      user.api_key = uuidv4(uuidString) // eslint-disable-line no-param-reassign
      user.password = bcrypt.hashSync(user.password, 10) // eslint-disable-line no-param-reassign
    },
  }

  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    api_key: DataTypes.STRING,
  }, { hooks })

  return User
}
