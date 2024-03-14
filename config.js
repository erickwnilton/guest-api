import { configDotenv } from "dotenv";

configDotenv();

export const server = {
  port: process.env.PORT
}