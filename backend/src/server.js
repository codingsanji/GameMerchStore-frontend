const express = require('express')
const { sequelize } = require('./dbcontext/sequelize')
const routerProduct = require('./routes/UserRoute/routerProduct')
const routerAuth = require('./routes/UserRoute/routerAuth')
const routerOrder = require('./routes/UserRoute/routerOrder')
const routerProductManagement = require('./routes/AdminRoute/routerProductManagement')

const app = express()

sequelize.authenticate().then(async () => {
	app.listen(3001, () => {
		console.log(`App is running on port 3001`)
	})
})
app.use(express.json())

app.use('/product', routerProduct)
app.use('/auth', routerAuth)
app.use('/order', routerOrder)
app.use('/productManagement', routerProductManagement)
