const { DataTypes } = require("sequelize");

const { sequelize } = require("../../config/sequelize");

const contactSchema = sequelize.define(
  "Contact",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "contacts",
    timestamps: true,
    paranoid: true
  }
);

module.exports = contactSchema;
