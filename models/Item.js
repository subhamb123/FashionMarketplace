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

    static async findItemsByCategorySubcategory(category, subcategory) {
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

    static async getMaxItemId() {
        try {
            const result = await Item.max('itemid');
            return result;
        } catch (error) {
            console.error('Error retrieving max itemid:', error);
            throw error;
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
    size: {
        type: DataTypes.STRING, // Assuming size is a string, adjust if necessary
        allowNull: false
    },
    timestamp: {
        type: DataTypes.DATE, // Assuming timestamp is a Date, adjust if necessary
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Item',
    tableName: 'ITEMS',
    timestamps: false
  });
  
module.exports = Item