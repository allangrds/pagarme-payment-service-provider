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
  findOne: (where, attributes) => {
    const defaultAttributes = [
      'email',
      'api_key',
    ]
    const selectedAttributes = attributes || defaultAttributes

    return baseRepository.findOne(User, selectedAttributes, where)
  },
}

module.exports = userRepository
