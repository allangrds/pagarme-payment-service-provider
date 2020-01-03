const bcrypt = require('bcryptjs')

module.exports = {
  up: queryInterface => (
    queryInterface.bulkInsert('Users', [{
      email: 'usuario@email.com',
      password: bcrypt.hashSync('123', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {})
  ),

  down: queryInterface => (
    queryInterface.bulkDelete('Users', null, {})
  ),
}
