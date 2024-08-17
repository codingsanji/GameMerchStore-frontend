const express = require('express')
const sequelize = require('./dbcontext/sequelize')

const app = express()

sequelize.authenticate().then(() => {
    app.listen(3001, () => {
        console.log('App is running on port 3001')
    })
})

app.use(express.json())

