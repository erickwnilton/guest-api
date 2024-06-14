import { configDotenv } from "dotenv";

configDotenv();

export const server = {
  port: process.env.PORT
}

export const database = {
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST
}

export const login = {
  secretKey: process.env.SECRETKEY
}

export const company = {
  companyId: process.env.DEFAULT_COMPANYID
}