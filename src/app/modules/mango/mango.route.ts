import { Router } from "express";

import {
  createMangoController,
  deleteMangoController,
  getAllMangoController,
  searchMangoController,
  singleMangoController,
  updateMangoController,
} from "./mango.controller";

const mangoRoute = Router();

mangoRoute.post("/create", createMangoController);
mangoRoute.get("/single/:mangoId", singleMangoController);
mangoRoute.patch("/update/:mangoId", updateMangoController);
mangoRoute.delete("/delete/:mangoId", deleteMangoController);
mangoRoute.get("/search", searchMangoController);
mangoRoute.get("/", getAllMangoController);

export default mangoRoute;
