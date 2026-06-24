import { Router } from "express";
import {
  createOrderController,
  getOrderController,
} from "./order.controller";

const orderRoute = Router();

// create order
orderRoute.post("/create", createOrderController);

// get all orders
orderRoute.get("/all", getOrderController);

// get single order
//orderRoute.get("/find/:orderId", singleOrderController);

// update order
//orderRoute.patch("/update/:orderId", updateOrderController);

// delete order
//orderRoute.delete("/delete/:orderId", deleteOrderController);

export default orderRoute;