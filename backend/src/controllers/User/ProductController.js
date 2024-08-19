const ProductService = require('../../services/ProductService')

module.exports = {
	detail: (req, res) => ProductService.getProductDetail(req, res),
}
