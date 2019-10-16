const validateData = require('./validateData')

const validator = schema => (req, res, next) => {
  const errors = validateData(schema, req)

  if (!errors) {
    return next()
  }

  return res.status(422).json({
    errors: [...errors],
  })
}

module.exports = validator
