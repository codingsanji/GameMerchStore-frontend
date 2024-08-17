try {
  await sequelize.authenticate();
  console.log("connection successful");
} catch (error) {
  console.log("connection failed");
}
