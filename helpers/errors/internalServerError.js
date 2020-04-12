const BaseError = require('./baseError')

class InternalServerError extends BaseError {
  constructor () {
    super(500, 'somethingBroke', 'O servidor não conseguiu processar esta requisição')
  }
}

module.exports = InternalServerError
