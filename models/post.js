const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Post = sequelize.define("post", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true, // Corrected typo
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  photo: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Post;
