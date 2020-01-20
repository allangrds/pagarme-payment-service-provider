const Joi = require('joi')

const schema = Joi.object({
  body: Joi.object({
    email: Joi
      .string()
      .email()
      .max(255)
      .required(),
    password: Joi
      .string()
      .min(6)
      .max(24)
      .required(),
  }),
})

module.exports = schema
