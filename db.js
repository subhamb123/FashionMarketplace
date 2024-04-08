const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/marketplacedb.sqlite'
})

module.exports = sequelize