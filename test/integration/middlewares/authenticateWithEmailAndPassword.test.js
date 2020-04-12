const { expect } = require('chai')
const httpMocks = require('node-mocks-http')
const faker = require('faker')

const { User } = require('../../../app/models')
const authenticateWithEmailAndPassword = require('../../../middlewares/authenticateWithEmailAndPassword')

describe('Middlewares', () => {
  describe('Authenticate with Email & Password', () => {
    let user1
    let user2

    describe('When fails', () => {
      let validationResponse1
      let validationResponse2
      let validationResponse3

      before(async () => {
        user1 = await User.create({
          email: faker.internet.email(),
          password: '123456',
        })
        const req1 = {
          query: {},
        }
        const req2 = {
          query: {
            email: faker.internet.email(),
            password: '1234',
          },
        }
        const req3 = {
          query: {
            email: user1.email,
            password: '1234',
          },
        }
        const res = httpMocks.createResponse()
        const next1 = (error) => {
          validationResponse1 = error
        }
        const next2 = (error) => {
          validationResponse2 = error
        }
        const next3 = (error) => {
          validationResponse3 = error
        }

        await authenticateWithEmailAndPassword(req1, res, next1)
        await authenticateWithEmailAndPassword(req2, res, next2)
        await authenticateWithEmailAndPassword(req3, res, next3)
      })

      it('should have "401" as errorCode', () => {
        expect(validationResponse1.errorCode).to.equal(401)
        expect(validationResponse2.errorCode).to.equal(401)
        expect(validationResponse3.errorCode).to.equal(401)
      })

      it('should have "Acesso negado" as message', () => {
        expect(validationResponse1.message).to.equal('Acesso negado')
        expect(validationResponse2.message).to.equal('Acesso negado')
        expect(validationResponse3.message).to.equal('Acesso negado')
      })
    })
    describe('When have success', () => {
      let validationResponse

      before(async () => {
        const password = '123'

        user2 = await User.create({
          email: faker.internet.email(),
          password,
        })
        const req = {
          body: {},
          query: {
            email: user2.email,
            password,
          },
        }
        const res = httpMocks.createResponse()
        const next = (error) => {
          validationResponse = error
        }

        await authenticateWithEmailAndPassword(req, res, next)
      })

      it('should not have any error content', () => {
        expect(validationResponse).to.equal(undefined)
      })
    })

    after(() => {
      User.destroy({
        where: { email: user1.email },
      })

      User.destroy({
        where: { email: user2.email },
      })
    })
  })
})
