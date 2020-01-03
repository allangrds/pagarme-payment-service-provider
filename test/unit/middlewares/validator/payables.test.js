const { expect } = require('chai')

const validateData = require('../../../../middlewares/validator/validateData')
const schema = require('../../../../middlewares/validator/payables')

describe('Middlewares', () => {
  describe('Validator', () => {
    describe('Payables', () => {
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
      describe('fee', () => {
        it('should show "required" message', () => {
          const result = validateData(schema, { body: {} })

          const expectedResult = {
            field: 'fee',
            type: 'any.required',
            message: '"fee" is required',
          }

          expect(result).to.be.an('array').to.deep.include(expectedResult)
        })
        it('should show "min" message', () => {
          const result = validateData(schema, {
            body: {
              fee: 0,
            },
          })

          const expectedResult = {
            field: 'fee',
            type: 'number.min',
            message: '"fee" must be larger than or equal to 1',
          }

          expect(result).to.be.an('array').to.deep.include(expectedResult)
        })
        it('should show "number" message', () => {
          const result = validateData(schema, {
            body: {
              fee: 'a',
            },
          })

          const expectedResult = {
            field: 'fee',
            type: 'number.base',
            message: '"fee" must be a number',
          }

          expect(result).to.be.an('array').to.deep.include(expectedResult)
        })
        it('should show "integer" message', () => {
          const result = validateData(schema, {
            body: {
              fee: '1.1',
            },
          })

          const expectedResult = {
            field: 'fee',
            type: 'number.integer',
            message: '"fee" must be an integer',
          }

          expect(result).to.be.an('array').to.deep.include(expectedResult)
        })
        it('should not show any message', () => {
          const result = validateData(schema, {
            body: {
              fee: '1',
            },
          })

          const expectedResult = {
            field: 'fee',
          }

          expect(result).to.be.an('array').to.not.deep.include(expectedResult)
        })
      })
      describe('payment_date', () => {
        it('should show "required" message', () => {
          const result = validateData(schema, { body: {} })

          const expectedResult = {
            field: 'payment_date',
            type: 'any.required',
            message: '"payment_date" is required',
          }

          expect(result).to.be.an('array').to.deep.include(expectedResult)
        })
        it('should show "date" message', () => {
          const result = validateData(schema, {
            body: {
              payment_date: '2',
            },
          })

          const expectedResult = {
            field: 'payment_date',
            type: 'date.isoDate',
            message: '"payment_date" must be a valid ISO 8601 date',
          }

          expect(result).to.be.an('array').to.deep.include(expectedResult)
        })
        it('should not show any message', () => {
          const result = validateData(schema, {
            body: {
              payment_date: '2019-10-15T22:24:19.395003-03:00',
            },
          })

          const expectedResult = {
            field: 'payment_date',
            type: 'date.isoDate',
            message: '"payment_date" must be a valid ISO 8601 date',
          }

          expect(result).to.be.an('array').to.not.deep.include(expectedResult)
        })
      })
      describe('status', () => {
        it('should show "enum" message', () => {
          const result = validateData(schema, {
            body: {
              status: 'a',
            },
          })

          const expectedResult = {
            field: 'status',
            type: 'any.allowOnly',
            message: '"status" must be one of [paid, waiting_payment]',
          }

          expect(result).to.be.an('array').to.deep.include(expectedResult)
        })
        it('should not show any message', () => {
          const result = validateData(schema, {
            body: {
              status: 'paid',
            },
          })

          const expectedResult = {
            field: 'status',
          }

          expect(result).to.be.an('array').to.not.deep.include(expectedResult)
        })
      })
    })
  })
})
