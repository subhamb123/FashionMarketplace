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

    static async getNewItemId() {
        try {
            const maxItemId = await Item.max('itemid');
            if (maxItemId === null) {
                // If there are no existing items, start with 1
                return '001';
            } else {
                // Increment the max item id by 1
                let nextItemId = parseInt(maxItemId) + 1;
                // Pad the number with leading zeros if necessary
                return nextItemId.toString().padStart(3, '0');
            }
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
    style: {
        type: DataTypes.STRING,
        allowNull: false
    },
    size: {
        type: DataTypes.STRING,
        allowNull: false
    },
    seller: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    timestamp: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Item',
    tableName: 'ITEMS',
    timestamps: false
});
module.exports = Item