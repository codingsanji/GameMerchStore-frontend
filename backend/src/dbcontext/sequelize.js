const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize(
	'gamemerchstore',
	'user',
	'thisisforuserforthewebpj111',
	{
		host: 'localhost',
		dialect: 'mysql',
		logging: false,
		define: {
			freezeTableName: true,
			timestamps: true,
		},
	}
)

const Profile = require('../entities/Profile')(sequelize, DataTypes)
const User = require('../entities/User')(sequelize, DataTypes)
const Order = require('../entities/Order')(sequelize, DataTypes)
const OrderDetail = require('../entities/OrderDetail')(sequelize, DataTypes)
const Product = require('../entities/Product')(sequelize, DataTypes)

User.hasOne(Profile, { foreignKey: 'id', as: 'Profile' })

User.hasMany(Order, { foreignKey: 'userId', as: 'User' })

Product.hasMany(OrderDetail, { foreignKey: 'productId', as: 'Product' })
Order.hasMany(OrderDetail, { foreignKey: 'orderId', as: 'Order' })

sequelize.sync({ alter: true })

const DbContext = {
	User,
	Profile,
	Product,
	Order,
	OrderDetail,
}

module.exports = { DbContext, sequelize }
