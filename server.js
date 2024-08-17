const express = require('express');
const mysql = require ('mysql');
const cors = require('cors');
const config = require('./config');

const app = express();
app.use(cors());

const db = require('./models');

db.sequelize.sync().then(() => {
    app.listen(3001 , () => {
        console.log("Server running on port 3001...");
    });
});