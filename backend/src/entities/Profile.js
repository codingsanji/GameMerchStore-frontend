'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
	class Profile extends Model {
		static associate(models) {}
	}
	Profile.init(
		{
			fullname: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			phone: {
				type: DataTypes.STRING,
				validate: {
					isNumeric: true,
					len: 10,
				},
				allowNull: true,
			},
			address: {
				type: DataTypes.STRING,
				validate: {
					isAlphanumeric: true,
				},
				allowNull: true,
			},
		},
		{
			sequelize,
			modelName: 'Profile',
		}
	)

	return Profile
}
