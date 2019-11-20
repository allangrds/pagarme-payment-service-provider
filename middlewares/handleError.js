const handleError = (err, req, res, next) => {
  return res.status(500).json({
    status_code: 500,
    message: 'Something broke"'
  })
}

module.exports = handleError
