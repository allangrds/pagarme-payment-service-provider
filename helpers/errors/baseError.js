const { path } = require('ramda')

const errorCodes = require('./errorCodes')

class BaseError extends Error {
  constructor (statusCode, errorPath, message) {
    super(message)

    this.statusCode = statusCode
    this.errorCode = path(errorPath.split('.'), errorCodes)
  }

  getBody () {
    return {
      message: this.message,
      errorCode: this.errorCode,
    }
  }
}

module.exports = BaseError
