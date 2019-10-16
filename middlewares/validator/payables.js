const Joi = require('joi')

const schema = Joi.object({
  body: Joi.object({
    amount: Joi
      .number()
      .min(1)
      .integer()
      .required(),
    fee: Joi
      .number()
      .min(1)
      .integer()
      .required(),
    payment_date: Joi
      .date()
      .iso()
      .required(),
    status: Joi
      .valid('paid', 'waiting_payment')
      .required(),
  }),
})

module.exports = schema
