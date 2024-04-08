const sequelize = require('../db')
const { Model, DataTypes } = require('sequelize')

class Item extends Model {
    static async findItemsByCategory(category) {
        try {
            const itemsByCategory = await Item.findAll({
                where: {
                    category: category
                }
            });
            return itemsByCategory;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    static async findItemsByStyle(style) {
        try {
            const itemsByStyle = await Item.findAll({
                where: {
                    style: style
                }
            });
            return itemsByStyle;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}

Item.init({
    itemid: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subcategory: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.REAL,
      allowNull: false
    },
    designer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    style: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize, 
    modelName: 'Item'
  });

module.exports = Course