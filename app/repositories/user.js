const { User } = require('../models')
const baseRepository = require('./base')

const userRepository = {
  create: (values) => {
    const attributes = [
      'email',
      'api_key',
    ]

    return baseRepository.create(User, attributes, values)
  },
  findOne: (where) => {
    const attributes = [
      'email',
      'api_key',
    ]

    return baseRepository.findOne(User, attributes, where)
  },
}

module.exports = userRepository
