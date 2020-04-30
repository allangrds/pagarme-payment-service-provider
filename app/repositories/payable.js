const { Payable } = require('../models')
const baseRepository = require('./base')

const payableRepository = {
  create: (values) => {
    const attributes = []

    return baseRepository.create(Payable, attributes, values)
  },
}

module.exports = payableRepository
