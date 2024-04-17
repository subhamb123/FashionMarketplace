const sequelize = require('../db')
const { Model, DataTypes } = require('sequelize')

class Item extends Model {
    static async findItemsByCategory(category, subcategory) {
        try {
            const itemsByCategory = await Item.findAll({
                where: {
                    category: category,
                    subcategory: subcategory
                }
            });
            return itemsByCategory;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    static async findItemsByDesigner(designer) {
        try {
            const itemsByDesigner = await Item.findAll({
                where: {
                    designer: designer
                }
            });
            return itemsByDesigner;
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
    directory: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize, 
    modelName: 'Item',
    freezeTableName: true,
    timestamps: false
  });

module.exports = Item