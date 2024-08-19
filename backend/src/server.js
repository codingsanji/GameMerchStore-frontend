const express = require("express");
const { DbContext, sequelize } = require("./dbcontext/sequelize");

const app = express();

sequelize.authenticate().then(async () => {
  app.listen(3001, () => {
    console.log(`App is running on port 3001`);
  });
});
app.use(express.json());
