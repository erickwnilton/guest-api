import { Router } from "express";
import { Companies } from "./companies.routes.js";
import { Products } from "./products.routes.js";
import { Users } from "./users.routes.js"

export const routes = Router();

routes.use(Companies);
routes.use(Products);
routes.use(Users);