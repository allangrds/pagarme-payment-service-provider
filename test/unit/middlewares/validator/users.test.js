const { expect } = require('chai')

const validateData = require('../../../../middlewares/validator/validateData')
const schema = require('../../../../middlewares/validator/users')

describe('Middlewares', () => {
  describe('Validator', () => {
    describe('Users', () => {
      describe('email', () => {
        it('should show "required" message', () => {
          const result = validateData(schema, { body: {} })

          const expectedResult = {
            field: 'email',
            type: 'any.required',
            message: '"email" is required',
          }

          expect(result).to.be.an('array').to.deep.include(expectedResult)
        })
        it('should not show any message', () => {
          const result = validateData(schema, {
            body: {
              email: 'email@email.com',
            },
          })

          const expectedResult = {
            field: 'email',
          }

          expect(result).to.be.an('array').to.not.deep.include(expectedResult)
        })
      })
      describe('password', () => {
        it('should show "required" message', () => {
          const result = validateData(schema, { body: {} })

          const expectedResult = {
            field: 'email',
            type: 'any.required',
            message: '"email" is required',
          }

          expect(result).to.be.an('array').to.deep.include(expectedResult)
        })
        it('should show "min" message', () => {
          const result = validateData(schema, {
            body: {
              password: '123',
            },
          })

          const expectedResult = {
            field: 'password',
            type: 'string.min',
            message: '"password" length must be at least 6 characters long',
          }

          expect(result).to.be.an('array').to.deep.include(expectedResult)
        })
        it('should show "max" message', () => {
          const result = validateData(schema, {
            body: {
              password: '1234567890111213141412121',
            },
          })

          const expectedResult = {
            field: 'password',
            type: 'string.max',
            message: '"password" length must be less than or equal to 24 characters long',
          }

          expect(result).to.be.an('array').to.deep.include(expectedResult)
        })
        it('should not show any message', () => {
          const result = validateData(schema, {
            body: {
              password: '123456',
            },
          })

          const expectedResult = {
            field: 'email',
          }

          expect(result).to.be.an('array').to.not.deep.include(expectedResult)
        })
      })
    })
  })
})
