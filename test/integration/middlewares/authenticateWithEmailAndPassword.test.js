const { expect } = require('chai')
const httpMocks = require('node-mocks-http')

const authenticateWithEmailAndPassword = require('../../../middlewares/authenticateWithEmailAndPassword')

describe('Middlewares', () => {
  describe('Authenticate with Email & Password', () => {
    describe('When fails', () => {
      let validationResponse

      before(async () => {
        const req = {
          query: {
            email: 'usuario@email.com',
            password: '1234',
          },
        }
        const res = httpMocks.createResponse()

        validationResponse = await authenticateWithEmailAndPassword(req, res)
      })

      it('should have "401" as statusCode', () => {
        expect(validationResponse.statusCode).to.equal(401)
      })
    })
    describe('When have success', () => {
      let validationResponse

      before(async () => {
        const req = {
          query: {
            email: 'usuario@email.com',
            password: '123',
          },
        }
        const res = httpMocks.createResponse()
        const next = () => null

        validationResponse = (
          await authenticateWithEmailAndPassword(req, res, next)
        )
      })

      it('should not have "401" as statusCode', () => {
        expect(validationResponse).to.equal(null)
      })
    })
  })
})
