'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Product extends Model {
		static associate(models) {}
	}
	Product.init(
		{
			name: DataTypes.STRING,
			description: DataTypes.STRING,
			price: DataTypes.DECIMAL,
		},
		{
			sequelize,
			modelName: 'Product',
		}
	)
	return Product
}
