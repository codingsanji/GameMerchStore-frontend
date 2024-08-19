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
			timestamps: false,
			freezeTableName: true,
		},
	}
)

const User = require('../entities/User')(sequelize, DataTypes)
const Category = require('../entities/Category')(sequelize, DataTypes)
const Product = require('../entities/Product')(sequelize, DataTypes)
const Shipping = require('../entities/Shipping')(sequelize, DataTypes)
const Order = require('../entities/Order')(sequelize, DataTypes)
const OrderDetail = require('../entities/OrderDetail')(sequelize, DataTypes)

User.hasMany(Order, { foreignKey: 'userId', as: 'User' })

Product.hasOne(Category, { foreignKey: 'id', as: 'Category' })

Order.hasOne(Shipping, { foreignKey: 'id', as: 'Shipping' })

Product.hasMany(OrderDetail, { foreignKey: 'productId', as: 'Product' })
Order.hasMany(OrderDetail, { foreignKey: 'orderId', as: 'Order' })

// sequelize.sync({ alter: true })

const DbContext = {
	User,
	Category,
	Product,
	Shipping,
	Order,
	OrderDetail,
}

module.exports = { DbContext, sequelize }
