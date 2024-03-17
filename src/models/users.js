import { DataTypes } from "sequelize";
import { Product } from "./products.js";
import { Database } from "../database/index.js";

export const User = Database.define("users", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mail: {
    type: DataTypes.STRING,
    allowNull: false
  },
  companyId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      key: "id",
      model: "companies"
    }
  },
  document: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  profileImage: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
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