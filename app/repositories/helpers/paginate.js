const paginate = (query, { page }, where) => {
  const limit = 10
  const offset = (page * limit) - limit

  return {
    ...query,
    limit,
    offset,
    where,
  }
}

module.exports = paginate
