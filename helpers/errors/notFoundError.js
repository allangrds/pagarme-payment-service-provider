const BaseError = require('./baseError')

class NotFoundError extends BaseError {
  constructor () {
    super(404, 'notFound', 'Não encontrado')
  }
}

module.exports = NotFoundError
