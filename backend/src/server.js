const { Sequelize } = require("sequelize");

// Set up a Sequelize instance
const sequelize = new Sequelize(
  "GameMerchStore",
  "user",
  "thisisforuserforthewebpj111",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log(
      "Connection to the database has been established successfully."
    );
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
