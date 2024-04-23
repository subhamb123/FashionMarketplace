const sequelize = require('../db')
const { Model, DataTypes } = require('sequelize')

class Staffpick extends Model {

}

Staffpick.init({
  itemid: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  }}, {
  sequelize, 
  modelName: 'Staffpick',
  tableName: 'STAFFPICK',
  timestamps: false
});

module.exports = Staffpick