const validateData = (schema, data) => {
  const { error } = schema.validate(data, {
    abortEarly: false,
    stripUnknown: true,
  })

  if (!error) {
    return null
  }

  const { details: errorDetails } = error

  const message = errorDetails.map(item => ({
    field: item.context.key,
    type: item.type,
    message: item.message,
  }))

  return message
}

module.exports = validateData
