const sequelize = require('sequelize')

const { Payable } = require('../models')

const index = async (req, res) => {
  const results = await Payable.findAll({
    attributes: [
      [sequelize.fn('sum', sequelize.col('amount')), 'total'],
      'status',
    ],
    group: ['status'],
    where: {
      user_id: req.body.user_id,
    }
  })

  return res.status(200).json(results)
}

module.exports = { index }
