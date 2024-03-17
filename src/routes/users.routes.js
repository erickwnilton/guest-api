import { Router } from "express";
import { delUser, getUsers, postUser, putUser } from "../controllers/users.js";

export const Users = Router();

Users.get("/users", getUsers);
Users.post("/user", postUser);
Users.put("/user/:id", putUser);
Users.delete("/user/:id", delUser);