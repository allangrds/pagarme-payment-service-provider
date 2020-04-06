const { expect } = require('chai')
const axios = require('axios')
const faker = require('faker')

const {
  Transaction,
  User,
} = require('../../app/models')
const url = require('./helpers/url')

describe('Routes', () => {
  describe('Transactions', () => {
    let user
    let transaction
    const email = faker.internet.email()
    const password = '123456'

    before(async () => {
      user = await axios.post(`${url}/users`, {
        email,
        password,
      })
    })

    describe('Create', () => {
      before(async () => {
        const payload = {
          user_id: user.data.id,
          amount: 1234,
          payment_method: 'debit_card',
          card_number: '4929893653403228',
          card_expiration_date: '1020',
          card_cvv: '123',
          card_holder_name: 'JOAO S SILVA',
        }

        transaction = await axios.post(`${url}/transactions`, {
          api_key: user.data.api_key,
          ...payload,
        })

        transaction = transaction.data
      })

      it('should create a user', () => {
        const amount = 1234
        const paymentMethod = 'debit_card'
        const cardHolderName = 'JOAO S SILVA'
        const cardExpirationDate = '1020'
        const cardLastDigits = '3228'

        expect(transaction.amount).to.equal(amount)
        expect(transaction.payment_method).to.equal(paymentMethod)
        expect(transaction.card_holder_name).to.equal(cardHolderName)
        expect(transaction.card_expiration_date).to.equal(cardExpirationDate)
        expect(transaction.card_last_digits).to.equal(cardLastDigits)
        // eslint-disable-next-line no-unused-expressions
        expect(transaction.created_at).to.exist
      })
    })

    describe('Index', () => {
      let result

      before(async () => {
        result = await axios.get(`${url}/transactions?api_key=${user.data.api_key}`)
      })

      it('should not create a transaction', () => {
        const expectedObject = {
          current_page: 1,
          next_page: null,
          per_page: 1,
          total: 1,
          results: [
            {
              amount: 1234,
              card_expiration_date: '1020',
              card_holder_name: 'JOAO S SILVA',
              card_last_digits: '3228',
              created_at: result.data.results[0].created_at,
              description: null,
              payment_method: 'debit_card',
              transaction_id: result.data.results[0].transaction_id,
            },
          ],
        }

        expect(result.status).to.equal(200)
        expect(result.data).to.eql(expectedObject)
      })
    })

    after(async () => {
      await Transaction.destroy({
        where: { card_last_digits: '3228' },
      })

      await User.destroy({
        where: { email },
      })
    })
  })
})
