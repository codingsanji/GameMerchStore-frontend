const { DbContext } = require('../dbcontext/sequelize')

module.exports = {
	findById: async (id) => await DbContext.Product.findByPk(id),
	addProduct: (product) => DbContext.Product.create({ ...product }),
}
