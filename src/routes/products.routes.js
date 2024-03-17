import { Router } from "express";
import { delProduct, getProducts, postProduct, putProduct } from "../controllers/products.js";

export const Products = Router();

Products.get("/products", getProducts);
Products.post("/product", postProduct);
Products.put("/product/:id", putProduct);
Products.delete("/product/:id", delProduct);