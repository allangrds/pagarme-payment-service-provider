const handleError = (err, req, res) => (
  res.status(500).json({
    status_code: 500,
    message: 'Something broke"',
  })
)

module.exports = handleError
