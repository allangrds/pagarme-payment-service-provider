const { expect } = require('chai')
const axios = require('axios')
const faker = require('faker')

const { User } = require('../../app/models')
const url = require('./helpers/url')

describe('Routes', () => {
  describe('Users', () => {
    const email = faker.internet.email()
    const password = '123456'

    describe('Create', () => {
      let user

      before(async () => {
        user = await axios.post(`${url}/users`, {
          email,
          password,
        })
      })

      it('should create a user', () => {
        expect(user.status).to.equal(201)
        expect(user.data.email).to.equal(email)
        // eslint-disable-next-line no-unused-expressions
        expect(user.data.api_key).to.exist
      })
    })

    describe('Index', () => {
      let user

      before(async () => {
        user = await axios.get(
          `${url}/users?email=${email}&password=${password}`,
          {}
        )
      })

      it('should retrieve a user', () => {
        expect(user.status).to.equal(200)
        expect(user.data.email).to.equal(email)
        // eslint-disable-next-line no-unused-expressions
        expect(user.data.api_key).to.exist
      })
    })

    after(() => {
      User.destroy({
        where: { email },
      })
    })
  })
})
