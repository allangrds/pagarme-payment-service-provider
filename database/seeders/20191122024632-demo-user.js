const bcrypt = require('bcryptjs')
const uuidv4 = require('uuid/v4')

module.exports = {
  up: queryInterface => (
    queryInterface.bulkInsert('Users', [{
      api_key: uuidv4('123'),
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
