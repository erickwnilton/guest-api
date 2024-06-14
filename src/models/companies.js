import { User } from "./users.js";
import { DataTypes } from "sequelize";
import { Database } from "../database/index.js";

export const Company = Database.define("companies", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cnpj: {
    type: DataTypes.STRING,
    allowNull: false
  },
  primaryColor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  secundaryColor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
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

Company.hasMany(User);
User.belongsTo(Company);