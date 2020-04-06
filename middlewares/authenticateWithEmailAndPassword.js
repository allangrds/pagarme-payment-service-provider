const bcrypt = require('bcryptjs')

const UnauthorizedError = require('../helpers/errors/unauthorizedError')
const { User } = require('../app/models')

const authenticateWithEmailAndPassword = async (req, res, next) => {
  try {
    const { email, password } = req.query

    if (!email || !password) {
      throw new UnauthorizedError()
    }

    const userExists = await User.findOne({
      where: {
        email,
      },
    }, ['id', 'password'])

    if (!userExists) {
      throw new UnauthorizedError()
    }

    const {
      id: userId,
      password: savedPassword,
    } = userExists.dataValues
    const matchPassword = bcrypt.compareSync(password, savedPassword)

    if (!matchPassword) {
      throw new UnauthorizedError()
    }

    req.body.user_id = userId

    return next()
  } catch(error) {
    next(error)
  }
}

module.exports = authenticateWithEmailAndPassword
