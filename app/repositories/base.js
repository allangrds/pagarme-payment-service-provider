const baseRepository = {
  create: async (model, attributes, values) => {
    const result = await model.create(values)
    const filteredResult = {}

    attributes.forEach((attribute) => {
      if (result[attribute]) {
        filteredResult[attribute] = result[attribute]
      }
    })

    return filteredResult
  },
  findOne: (model, attributes, where) => {
    const result = model.findOne({
      attributes,
      where,
    })

    return result
  },
}

module.exports = baseRepository
