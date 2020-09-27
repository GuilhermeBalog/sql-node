const { Op } = require('sequelize')
const User = require('../models/User')

module.exports = {
  async show(req, res) {
    // Filtrar usuários com email com final @gmail.com
    // Desses usuários, filtrar os que moram em "Rua" 
    // E então retornar as techs desses usuários que começam com P

    const users = await User.findAll({
      attributes: ['name', 'email'],
      where: {
        email: {
          [Op.iLike]: '%@gmail.com'
        }
      },
      include: [
        {
          association: 'addresses',
          attributes: ['zipcode', 'street', 'number'],
          where: {
            street: {
              [Op.iLike]: 'Rua%'
            }
          },
        },
        {
          association: 'techs',
          attributes: ['name'],
          through: {
            attributes: []
          },
          required: false,
          where: {
            name: {
              [Op.iLike]: 'P%'
            }
          }
        }
      ]
    })

    return res.json(users)
  }
}