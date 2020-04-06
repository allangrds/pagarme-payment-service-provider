const { expect } = require('chai')

const paginate = require('../../../../../app/repositories/helpers/paginate')

describe('App', () => {
  describe('Repositories', () => {
    describe('Helpers', () => {
      describe('Paginate', () => {
        it('should generate a correctly object for page 1', () => {
          const where = { id: 1 }
          const res = paginate(
            {},
            { page: 1 },
            where
          )

          expect(res).to.have.eql({
            limit: 10,
            offset: 0,
            where: {
              id: 1,
            },
          })
        })

        it('should generate a correctly object for page 2', () => {
          const where = { id: 1 }
          const res = paginate(
            {},
            { page: 2 },
            where
          )

          expect(res).to.have.eql({
            limit: 10,
            offset: 10,
            where: {
              id: 1,
            },
          })
        })

        it('should generate a correctly object for page 3', () => {
          const where = { id: 1 }
          const res = paginate(
            {},
            { page: 3 },
            where
          )

          expect(res).to.have.eql({
            limit: 10,
            offset: 20,
            where: {
              id: 1,
            },
          })
        })
      })
    })
  })
})
