const User = require('../models/User')

const UserController = {
  async index(req, res){
    const users = await User.findAll()

    return res.json(users)
  },

  async store(req, res){
    const { name, email } = req.body
    const createdUser = await User.create({ name, email })

    return res.status(201).json(createdUser)
  },
}

module.exports = UserController