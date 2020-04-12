const BaseError = require('./baseError')

class UnauthorizedError extends BaseError {
  constructor () {
    super(401, 'unauthorized', 'Acesso negado')
  }
}

module.exports = UnauthorizedError
