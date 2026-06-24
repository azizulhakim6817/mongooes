import { Request, Response } from "express";
import { orderService } from "./order.service";

//! create order
export const createOrderController = async (
  req: Request,
  res: Response
) => {
  try {
    const newBody = req.body;
    const data = await orderService.createService(newBody);

    res.status(201).json({
      success: true,
      message: "Order is created successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Order creation failed! Insufficient stock!",
      error,
    });
  }
};

//! get all orders
export const getOrderController = async (
  req: Request,
  res: Response
) => {
  try {
    const data = await orderService.allOrderService();

    res.status(200).json({
      success: true,
      message: "Orders fetched successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch orders",
      error,
    });
  }
};