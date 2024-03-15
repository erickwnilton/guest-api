import { Router } from "express";
import { Companies } from "./companies.routes.js";

export const routes = Router();

routes.use(Companies);