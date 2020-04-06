const { expect } = require('chai')
const httpMocks = require('node-mocks-http')
const faker = require('faker')

const { User } = require('../../../app/models')
const authenticateWithApiKey = require('../../../middlewares/authenticateWithApiKey')

describe('Middlewares', () => {
  describe('Authenticate with API_KEY', () => {
    let user

    describe('When have success', () => {
      let validationResponse

      before(async () => {
        user = await User.create({
          email: faker.internet.email(),
          password: '123456',
        })

        const req = {
          body: {
            api_key: user.api_key,
          },
        }
        const res = httpMocks.createResponse()
        const next = () => ({})

        validationResponse = await authenticateWithApiKey(req, res, next)
      })

      it('should not have "401" as statusCode', () => {
        expect(validationResponse.statusCode).to.not.equal(401)
      })
    })
    describe('When fails', () => {
      let validationResponse1
      let validationResponse2

      before(async () => {
        const req1 = {
          body: {},
        }
        const req2 = {
          body: {
            api_key: 123,
          },
        }
        const res = httpMocks.createResponse()
        const next1 = (err) => {
          validationResponse1 = err
        }
        const next2 = (err) => {
          validationResponse2 = err
        }

        await authenticateWithApiKey(req1, res, next1)
        await authenticateWithApiKey(req2, res, next2)
      })

      it('should have "401" as errorCode', () => {
        expect(validationResponse1.errorCode).to.equal(401)
        expect(validationResponse2.errorCode).to.equal(401)
        expect(validationResponse1.message).to.equal('Acesso negado')
        expect(validationResponse2.message).to.equal('Acesso negado')
      })

      it('should have "Acesso negado" as message', () => {
        expect(validationResponse1.message).to.equal('Acesso negado')
        expect(validationResponse2.message).to.equal('Acesso negado')
      })
    })

    after(() => {
      User.destroy({
        where: { email: user.email },
      })
    })
  })
})
