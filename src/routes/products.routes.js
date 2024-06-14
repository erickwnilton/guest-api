import { Router } from "express";
import { SumProducts, delProduct, getProducts, postProduct, putProduct, totalProducts } from "../controllers/products.js";

export const Products = Router();

Products.get("/products/:id", getProducts);
Products.post("/product", postProduct);
Products.put("/product/:id", putProduct);
Products.get("/products/total/:id", totalProducts);
Products.get("/products/total-valor/:id", SumProducts);
Products.delete("/product/:id", delProduct);