const sequelize = require('../db');
const { Model, DataTypes } = require('sequelize');
const User = require('./User');
const Item = require('./Item');

class Favorite extends Model {}

Favorite.init(
  {
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      references: {
        model: User,
        key: 'email'
      }
    },
    item_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      references: {
        model: Item,
        key: 'itemid'
      }
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false
  }
  },
  {
    sequelize,
    modelName: 'Favorite',
    tableName: 'FAVORITES',
    timestamps: false
  }
);

module.exports = Favorite;
