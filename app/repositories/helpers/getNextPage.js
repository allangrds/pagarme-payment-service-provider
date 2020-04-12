const getNextPage = (total, perPage, currentPage) => {
  const parsedTotal = parseInt(total, 10)
  const parsedPerPage = parseInt(perPage, 10)
  const parsedCurrentPage = parseInt(currentPage, 10)

  if ((parsedTotal - parsedPerPage) > 0 && parsedCurrentPage === 1) {
    return 2
  }

  let alreadyShowed = 0

  for (let i = 0; i < parsedCurrentPage; i += 1) {
    alreadyShowed += 10
  }

  if ((parsedTotal - alreadyShowed) > 0) {
    return parsedCurrentPage + 1
  }

  return null
}

module.exports = getNextPage
