'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: DataTypes.STRING,
      role: {
        type: DataTypes.STRING,
        defaultValue: 'user'
      }
    },
    {
      sequelize,
      tableName: 'users',
      modelName: 'User'
    }
  )
  return User
}
