const BaseError = require('../helpers/errors/baseError')
const InternalServerError = require('../helpers/errors/internalServerError')

const normalizeError = (err) => {
  if (err instanceof BaseError) {
    return err
  }

  return new InternalServerError(err)
}

// eslint-disable-next-line max-params
const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }

  const error = normalizeError(err)

  const { statusCode } = error
  const body = error.getBody()

  return res.status(statusCode).send(body)
}

module.exports = errorHandler
