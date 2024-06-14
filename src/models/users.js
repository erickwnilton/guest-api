import { DataTypes } from "sequelize";
import { Product } from "./products.js";
import { Database } from "../database/index.js";
import { company } from "../../config.js";

export const User = Database.define("users", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  mail: {
    type: DataTypes.STRING,
    allowNull: true
  },
  companyId: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: company.companyId,
    references: {
      key: "id",
      model: "companies"
    }
  },
  document: {
    type: DataTypes.STRING,
    allowNull: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  profileImage: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "image"
  },
  role: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "comum"
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
})

User.hasMany(Product);
Product.belongsTo(User);