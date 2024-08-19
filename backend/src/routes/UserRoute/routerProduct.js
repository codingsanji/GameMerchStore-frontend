const express = require('express')
const ProductController = require('../../controllers/User/ProductController')
const routerProduct = express.Router()

routerProduct.get('/', (req, res) => {})
routerProduct.get('/detail/:id', (req, res) =>
	ProductController.detail(req, res)
)

module.exports = routerProduct
