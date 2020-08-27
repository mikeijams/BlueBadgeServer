const Sequelize = require("sequelize");

// const sequelize = new Sequelize("blue-badge-project", "postgres", "password", {
//   host: "localhost",
//   dialect: "postgres",
// });

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
})

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
