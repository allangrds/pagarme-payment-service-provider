const { path } = require('ramda')

const UnauthorizedError = require('../helpers/errors/unauthorizedError')
const { User } = require('../app/models')

const authenticateWithApiKey = async (req, res, next) => {
  try {
    const apiKeyFromBody = path(['body', 'api_key'], req)
    const apiKeyFromQuery = path(['query', 'api_key'], req)
    const apiKey = apiKeyFromBody || apiKeyFromQuery

    if (!apiKey) {
      throw new UnauthorizedError()
    }

    const userExists = await User.findOne({
      where: {
        api_key: apiKey,
      },
    }, ['id'])

    if (!userExists) {
      throw new UnauthorizedError()
    }

    const {
      id: userId,
    } = userExists.dataValues

    req.body.user_id = userId

    return next()
  } catch (error) {
    next(error)
  }

  return null
}

module.exports = authenticateWithApiKey
