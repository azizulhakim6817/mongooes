import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getAllUserController,
  queryUserController,
  singleUserController,
  updateUserController,
} from "./user.controller";

const userRoutes = Router();

// create user
userRoutes.post("/create", createUserController);

// get all users
userRoutes.get("/all", getAllUserController);

// get single user
userRoutes.get("/:userId", singleUserController);

// update user
userRoutes.patch("/:userId", updateUserController);

// delete user
userRoutes.delete("/:userId", deleteUserController);

// search user
userRoutes.get("/query", queryUserController);

export default userRoutes;