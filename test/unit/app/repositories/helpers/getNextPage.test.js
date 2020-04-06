const { expect } = require('chai')

const getNextPage = require('../../../../../app/repositories/helpers/getNextPage')

describe('App', () => {
  describe('Repositories', () => {
    describe('Helpers', () => {
      describe('getNextPage', () => {
        it('should get "2" as nextPage', () => {
          const total = 20
          const perPage = 10
          const currentPage = 1

          const nextPage = getNextPage(total, perPage, currentPage)

          expect(nextPage).to.equal(2)
        })

        it('should get "3" as nextPage', () => {
          const total = 30
          const perPage = 10
          const currentPage = 2

          const nextPage = getNextPage(total, perPage, currentPage)

          expect(nextPage).to.equal(3)
        })

        it('should get "null" as nextPage', () => {
          const total = 30
          const perPage = 10
          const currentPage = 3

          const nextPage = getNextPage(total, perPage, currentPage)

          expect(nextPage).to.equal(null)
        })
      })
    })
  })
})
