const { expect } = require('chai')

const validateData = require('../../../../middlewares/validator/validateData')
const schema = require('../../../../middlewares/validator/transactions')

describe('Middlewares', () => {
  describe('Validator', () => {
    describe('Transaction', () => {
      describe('With wrong request values', () => {
        describe('amount', () => {
          it('should show "required" message', () => {
            const result = validateData(schema, { body: {} })

            const expectedResult = {
              field: 'amount',
              type: 'any.required',
              message: '"amount" is required',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should show "min" message', () => {
            const result = validateData(schema, {
              body: {
                amount: 0,
              },
            })

            const expectedResult = {
              field: 'amount',
              type: 'number.min',
              message: '"amount" must be larger than or equal to 1',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should show "number" message', () => {
            const result = validateData(schema, {
              body: {
                amount: 'a',
              },
            })

            const expectedResult = {
              field: 'amount',
              type: 'number.base',
              message: '"amount" must be a number',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should show "integer" message', () => {
            const result = validateData(schema, {
              body: {
                amount: '1.1',
              },
            })

            const expectedResult = {
              field: 'amount',
              type: 'number.integer',
              message: '"amount" must be an integer',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should not show any message', () => {
            const result = validateData(schema, {
              body: {
                amount: '1',
              },
            })

            const expectedResult = {
              field: 'amount',
            }

            expect(result).to.be.an('array').to.not.deep.include(expectedResult)
          })
        })
        describe('description', () => {
          it('should show "max" message', () => {
            const result = validateData(schema, {
              body: {
                description: String().padStart(256, 'a'),
              },
            })

            const expectedResult = {
              field: 'description',
              type: 'string.max',
              message: '"description" length must be less than or equal to 255 characters long',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should show "string" message', () => {
            const result = validateData(schema, {
              body: {
                description: 1,
              },
            })

            const expectedResult = {
              field: 'description',
              type: 'string.base',
              message: '"description" must be a string',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should not show any message', () => {
            const result = validateData(schema, {
              body: {
                description: 'a',
              },
            })

            const expectedResult = {
              field: 'description',
            }

            expect(result).to.be.an('array').to.not.deep.include(expectedResult)
          })
        })
        describe('payment_method', () => {
          it('should show "enum" message', () => {
            const result = validateData(schema, {
              body: {
                payment_method: 1,
              },
            })

            const expectedResult = {
              field: 'payment_method',
              type: 'any.allowOnly',
              message: '"payment_method" must be one of [debit_card, credit_card]',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should not show any message', () => {
            const result = validateData(schema, {
              body: {
                payment_method: 'credit_card',
              },
            })

            const expectedResult = {
              field: 'payment_method',
            }

            expect(result).to.be.an('array').to.not.deep.include(expectedResult)
          })
        })
        describe('card_number', () => {
          it('should show "required" message', () => {
            const result = validateData(schema, { body: {} })

            const expectedResult = {
              field: 'card_number',
              type: 'any.required',
              message: '"card_number" is required',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should show "min" message', () => {
            const result = validateData(schema, {
              body: {
                card_number: String().padStart(13, '1'),
              },
            })

            const expectedResult = {
              field: 'card_number',
              type: 'string.min',
              message: '"card_number" length must be at least 14 characters long',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should show "max" message', () => {
            const result = validateData(schema, {
              body: {
                card_number: String().padStart(17, '1'),
              },
            })

            const expectedResult = {
              field: 'card_number',
              type: 'string.max',
              message: '"card_number" length must be less than or equal to 16 characters long',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should show "string" message', () => {
            const result = validateData(schema, {
              body: {
                card_number: 1,
              },
            })

            const expectedResult = {
              field: 'card_number',
              type: 'string.base',
              message: '"card_number" must be a string',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should show "string" using numbers message', () => {
            const result = validateData(schema, {
              body: {
                card_number: String().padStart(14, 'a'),
              },
            })

            const expectedResult = {
              field: 'card_number',
              type: 'string.regex.base',
              message: `"card_number" with value "${String().padStart(14, 'a')}" fails to match the required pattern: /^[0-9]+$/`,
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should show "creditCard" message', () => {
            const result = validateData(schema, {
              body: {
                card_number: String().padStart(13, '1'),
              },
            })

            const expectedResult = {
              field: 'card_number',
              type: 'string.creditCard',
              message: '"card_number" must be a credit card',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })

          it('should not show any message', () => {
            const result = validateData(schema, {
              body: {
                card_number: '5428395570388089',
              },
            })

            const expectedResult = {
              field: 'card_number',
            }

            expect(result).to.be.an('array').to.not.deep.include(expectedResult)
          })
        })
        describe('card_holder_name', () => {
          it('should show "required" message', () => {
            const result = validateData(schema, { body: {} })

            const expectedResult = {
              field: 'card_holder_name',
              type: 'any.required',
              message: '"card_holder_name" is required',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should show "min" message', () => {
            const result = validateData(schema, {
              body: {
                card_holder_name: String().padStart(2, '1'),
              },
            })

            const expectedResult = {
              field: 'card_holder_name',
              type: 'string.min',
              message: '"card_holder_name" length must be at least 3 characters long',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should show "max" message', () => {
            const result = validateData(schema, {
              body: {
                card_holder_name: String().padStart(46, '1'),
              },
            })

            const expectedResult = {
              field: 'card_holder_name',
              type: 'string.max',
              message: '"card_holder_name" length must be less than or equal to 45 characters long',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should show "string" message', () => {
            const result = validateData(schema, {
              body: {
                card_holder_name: 1,
              },
            })

            const expectedResult = {
              field: 'card_holder_name',
              type: 'string.base',
              message: '"card_holder_name" must be a string',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should not show any message', () => {
            const result = validateData(schema, {
              body: {
                card_holder_name: 'allan',
              },
            })

            const expectedResult = {
              field: 'card_holder_name',
            }

            expect(result).to.be.an('array').to.not.deep.include(expectedResult)
          })
        })
        describe('card_expiration_date', () => {
          it('should show "required" message', () => {
            const result = validateData(schema, { body: {} })

            const expectedResult = {
              field: 'card_expiration_date',
              type: 'any.required',
              message: '"card_expiration_date" is required',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should show "min" message', () => {
            const result = validateData(schema, {
              body: {
                card_expiration_date: String().padStart(3, '1'),
              },
            })

            const expectedResult = {
              field: 'card_expiration_date',
              type: 'string.min',
              message: '"card_expiration_date" length must be at least 4 characters long',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should show "max" message', () => {
            const result = validateData(schema, {
              body: {
                card_expiration_date: String().padStart(5, '1'),
              },
            })

            const expectedResult = {
              field: 'card_expiration_date',
              type: 'string.max',
              message: '"card_expiration_date" length must be less than or equal to 4 characters long',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should show "string" message', () => {
            const result = validateData(schema, {
              body: {
                card_expiration_date: 1,
              },
            })

            const expectedResult = {
              field: 'card_expiration_date',
              type: 'string.base',
              message: '"card_expiration_date" must be a string',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should show "string" using numbers message', () => {
            const result = validateData(schema, {
              body: {
                card_expiration_date: String().padStart(14, 'a'),
              },
            })

            const expectedResult = {
              field: 'card_expiration_date',
              type: 'string.regex.base',
              message: `"card_expiration_date" with value "${String().padStart(14, 'a')}" fails to match the required pattern: /^[0-9]+$/`,
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should not show any message', () => {
            const result = validateData(schema, {
              body: {
                card_expiration_date: '0921',
              },
            })

            const expectedResult = {
              field: 'card_expiration_date',
            }

            expect(result).to.be.an('array').to.not.deep.include(expectedResult)
          })
        })
        describe('cvv', () => {
          it('should show "required" message', () => {
            const result = validateData(schema, { body: {} })

            const expectedResult = {
              field: 'cvv',
              type: 'any.required',
              message: '"cvv" is required',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should show "min" message', () => {
            const result = validateData(schema, {
              body: {
                cvv: String().padStart(2, '1'),
              },
            })

            const expectedResult = {
              field: 'cvv',
              type: 'string.min',
              message: '"cvv" length must be at least 3 characters long',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should show "max" message', () => {
            const result = validateData(schema, {
              body: {
                cvv: String().padStart(4, '1'),
              },
            })

            const expectedResult = {
              field: 'cvv',
              type: 'string.max',
              message: '"cvv" length must be less than or equal to 3 characters long',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should show "string" message', () => {
            const result = validateData(schema, {
              body: {
                cvv: 1,
              },
            })

            const expectedResult = {
              field: 'cvv',
              type: 'string.base',
              message: '"cvv" must be a string',
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should show "string" using numbers message', () => {
            const result = validateData(schema, {
              body: {
                cvv: String().padStart(14, 'a'),
              },
            })

            const expectedResult = {
              field: 'cvv',
              type: 'string.regex.base',
              message: `"cvv" with value "${String().padStart(14, 'a')}" fails to match the required pattern: /^[0-9]+$/`,
            }

            expect(result).to.be.an('array').to.deep.include(expectedResult)
          })
          it('should not show any message', () => {
            const result = validateData(schema, {
              body: {
                cvv: '123',
              },
            })

            const expectedResult = {
              field: 'cvv',
            }

            expect(result).to.be.an('array').to.not.deep.include(expectedResult)
          })
        })
      })
      describe('With valid request values', () => {
        const payload = {
          amount: 1000,
          description: 'Descrição',
          payment_method: 'credit_card',
          card_number: '4142523315089880',
          card_holder_name: 'Joao',
          card_expiration_date: '0921',
          cvv: '123',
        }
        const result = validateData(schema, { body: payload })
        const expectedResult = null

        it('should return "null"', () => {
          expect(result).to.equal(expectedResult)
        })
      })
    })
  })
})
