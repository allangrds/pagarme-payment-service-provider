const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  })

  User.beforeCreate(async (user) => {
    user.password = bcrypt.hashSync(user.password, 10)
  })

  return User
}
