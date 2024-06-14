import { Sequelize } from "sequelize";
import { database } from "../../config.js";

export const Database = new Sequelize(database.database, database.username, database.password, {
  host: database.host,
  dialect: "mysql"
})