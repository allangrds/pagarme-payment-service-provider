const Joi = require('joi')

const schema = Joi.object({
  body: Joi.object({
    amount: Joi
      .number()
      .min(1)
      .integer()
      .required(),
    description: Joi
      .string()
      .max(255),
    payment_method: Joi
      .valid('debit_card', 'credit_card')
      .required(),
    card_number: Joi
      .string()
      .min(14)
      .max(16)
      .regex(/^[0-9]+$/)
      .creditCard()
      .required(),
    card_holder_name: Joi
      .string()
      .min(3)
      .max(45)
      .required(),
    card_expiration_date: Joi
      .string()
      .min(4)
      .max(4)
      .regex(/^[0-9]+$/)
      .required(),
    cvv: Joi
      .string()
      .min(3)
      .max(3)
      .regex(/^[0-9]+$/)
      .required(),
  }),
})

module.exports = schema
