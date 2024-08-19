'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class OrderDetail extends Model {
		static associate(models) {}
	}
	OrderDetail.init(
		{
			productId: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				references: {
					model: 'Product',
					key: 'id',
				},
			},
			orderId: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				references: {
					model: 'Order',
					key: 'id',
				},
			},
			quantity: DataTypes.INTEGER,
			subtotal: DataTypes.DECIMAL,
		},
		{
			sequelize,
			modelName: 'OrderDetail',
			tableName: 'order_detail',
		}
	)
	return OrderDetail
}
