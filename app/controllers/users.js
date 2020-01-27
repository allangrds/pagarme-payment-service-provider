const { User } = require('../repositories')

const create = async (req, res) => {
  const { email, password } = req.body

  const createdUser = await User.create({ email, password })

  return res.status(201).json(createdUser)
}

const index = async (req, res) => {
  const { email } = req.query

  const user = await User.findOne({
    email,
  })

  return res.status(200).json(user)
}

module.exports = { create, index }
