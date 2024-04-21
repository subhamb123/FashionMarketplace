const sequelize = require('../db')
const { Model, DataTypes } = require('sequelize')

class Request extends Model {

}

Request.init({
  user_email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  suggestions: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  sequelize, 
  modelName: 'Suggestions',
  freezeTableName: true,
  timestamps: false
});

module.exports = Request