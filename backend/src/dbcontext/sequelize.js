const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    'gamemerchstore',
    'user',
    'thisisforuserforthewebpj111',
    {
        host: 'localhost',
        dialect: 'mysql',
    }
)

module.exports = sequelize