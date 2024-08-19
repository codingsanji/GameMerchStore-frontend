'use strict'
const { Model } = require('sequelize')
const Profile = require('./Profile')

module.exports = (sequelize, DataTypes) => {
	class User extends Model {}
	User.init(
		{
			username: {
				type: DataTypes.STRING,
				unique: true,
			},
			email: {
				type: DataTypes.STRING,
				unique: true,
				validate: {
					isEmail: true,
				},
			},
			password: {
				type: DataTypes.STRING,
			},
			profileId: {
				type: DataTypes.INTEGER,
				references: {
					model: 'Profile',
					key: 'id',
				},
			},
		},
		{
			sequelize,
			modelName: 'User',
		}
	)

	return User
}
