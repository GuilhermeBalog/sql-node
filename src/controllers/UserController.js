const User = require('../models/User')

const UserController = {
  async index(req, res) {
    const users = await User.findAll({
      include: [
        {
          association: 'addresses',
          attributes: ['zipcode', 'street', 'number']
        },
        {
          association: 'techs',
          attributes: ['name'],
          through: {
            attributes: []
          }
        },
      ]
    })

    return res.json(users)
  },

  async store(req, res) {
    const { name, email } = req.body
    const createdUser = await User.create({ name, email })

    return res.status(201).json(createdUser)
  },

  async update(req, res) {
    const { id } = req.params
    const { name, email } = req.body
    const user = await User.findByPk(id)

    if(!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    const updateUser = await user.update({ name, email })

    return res.json(updateUser)
  }
}

module.exports = UserController
