const Sequelize = require("sequelize");

const sequelize = new Sequelize("blog", "root", "kzth9169#", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
