const ProductRepository = require('../repositories/ProductRepository')

module.exports = {
	getProductDetail: async (req, res) => {
		try {
			const product = await ProductRepository.findById(req.params.id)
			if (!product) {
				return res.status(404).json({ error: 'Product not found' })
			}
			return res.status(200).json(product)
		} catch (error) {
			return res.status(500).json({ error: error.message })
		}
	},
}
