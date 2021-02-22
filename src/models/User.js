const { Model, DataTypes } = require('sequelize')
const Slugify = require('sequelize-slugify')

class User extends Model {
  static init(connection) {
    const userModel = super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      slug: {
        type: DataTypes.STRING,
        unique: true,
      }
    }, {
      sequelize: connection
    })

    Slugify.slugifyModel(userModel, {
      source: ['name', 'id']
    })
  }

  static associate(models) {
    this.hasMany(models.Address, {
      foreignKey: 'user_id',
      as: 'addresses'
    })
    this.belongsToMany(models.Tech, {
      foreignKey: 'user_id',
      through: 'user_techs',
      as: 'techs'
    })
  }
}

module.exports = User
