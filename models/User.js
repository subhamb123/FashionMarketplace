const sequelize = require('../db')
const { Model, DataTypes } = require('sequelize')

class User extends Model {

    static async findUser(email, password){
        try {
            const user = await User.findByPk(email)
            if(user && user.password === password){
                return user
            }else{
                return null
            }
        } catch (error) {
            console.log(error)
            return null
        }
    }

}

User.init({
  email: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username:{
    type: DataTypes.STRING,
    allowNull: false
  },
  user_type: {
    type: DataTypes.STRING,
    allowNull: false,
    validate : {
        isIn: [['admin', 'user']]
    }
  }
}, {
  sequelize, 
  modelName: 'User',
  timestamps: false
});

module.exports = User