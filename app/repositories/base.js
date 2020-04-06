const paginate = require('./helpers/paginate')
const getNextPage = require('./helpers/getNextPage')

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
  // eslint-disable-next-line max-params
  findAll: async (model, attributes, page, userId) => {
    const reqPage = page || 1
    const where = {
      user_id: userId,
    }

    const results = await model.findAll(paginate(
      { attributes },
      { page: reqPage },
      where
    ))
    const total = await model.count({ where })
    const currentPage = results.length ? parseInt(reqPage, 10) : 0
    const perPage = results.length || 0
    const nextPage = getNextPage(total, perPage, currentPage)

    return {
      current_page: currentPage,
      next_page: nextPage,
      per_page: perPage,
      total,
      results,
    }
  },
}

module.exports = baseRepository
