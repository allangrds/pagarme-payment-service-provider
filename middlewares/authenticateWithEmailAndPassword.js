const bcrypt = require('bcryptjs')

const { User } = require('../app/models')

const returnUnauthorized = res => (
  res.status(401).json({
    status_code: 401,
    error: 'Unauthorized',
    message: 'Access denied',
  })
)

const authenticateWithEmailAndPassword = async (req, res, next) => {
  const { email, password } = req.query

  if (!email && !password) {
    return returnUnauthorized(res)
  }

  const userExists = await User.findOne({
    where: {
      email,
    },
  })

  if (!userExists) {
    return returnUnauthorized(res)
  }

  const { password: savedPassword } = userExists.dataValues
  const matchPassword = bcrypt.compareSync(password, savedPassword)

  if (!matchPassword) {
    return returnUnauthorized(res)
  }

  return next()
}

module.exports = authenticateWithEmailAndPassword
