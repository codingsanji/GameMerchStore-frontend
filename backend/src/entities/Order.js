'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Order extends Model {
		static associate(models) {}
	}
	Order.init(
		{
			amount: DataTypes.INTEGER,
			total: DataTypes.DECIMAL,
			userId: {
				type: DataTypes.INTEGER,
				references: {
					model: 'User',
					key: 'id',
				},
			},
		},
		{
			sequelize,
			modelName: 'Order',
		}
	)
	return Order
}
