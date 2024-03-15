import { Router } from "express";
import { delCompany, getCompanies, postCompany, putCompany } from "../controllers/companies.js";

export const Companies = Router();

Companies.get("/companies", getCompanies);
Companies.post("/company", postCompany);
Companies.put("/company/:id", putCompany);
Companies.delete("/company/:id", delCompany);