import cors from "cors";
import express from "express";
import { database } from "./config.js";
import { Database } from "./src/database/index.js";
import { routes } from "./src/routes/routes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes)

async function connectDatabase() {
  try {
    await Database.authenticate();
    console.log(`connection established with ${database.database}`);
  } catch (error) {
    console.error(`connection not established ${error}`);
  }
}

export {
  app,
  connectDatabase
}