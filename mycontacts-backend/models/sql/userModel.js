const { DataTypes } = require("sequelize");

const { sequelize } = require("../../config/sequelize");

const userSchema = sequelize.define(
  "Users",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM("MALE", "FEMALE", "OTHERS"),
      allowNull: false,
    },
    dateOfBirth: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: users,
    timestamps: true,
    paranoid: true,
  }
);


module.exports = userSchema