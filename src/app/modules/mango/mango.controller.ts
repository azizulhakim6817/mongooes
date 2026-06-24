import { Request, Response } from "express";
import { mangoServices } from "./mango.service";

//! create mango
export const createMangoController = async (req: Request, res: Response) => {
  try {
    const newBody = req.body;
    const data = await mangoServices.createMangoService(newBody);

    res.status(201).json({
      success: true,
      message: "Mango is created successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Mango isn't created!",
      error,
    });
  }
};

//! get all mango
export const getAllMangoController = async (req: Request, res: Response) => {
  try {
    const data = await mangoServices.getAllMangoService();

    res.status(200).json({
      success: true,
      message: "All mangoes fetched successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get mangoes!",
      error,
    });
  }
};

//! single mango
export const singleMangoController = async (req: Request, res: Response) => {
  try {
    const mangoId = req.params.mangoId;
    const data = await mangoServices.singleMangoService(mangoId);

    res.status(200).json({
      success: true,
      message: "Single mango fetched successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get mango!",
      error,
    });
  }
};

//! update mango
export const updateMangoController = async (req: Request, res: Response) => {
  try {
    const mangoId = req.params.mangoId;
    const payload = req.body;

    const data = await mangoServices.updateMangoService(mangoId, payload);

    res.status(200).json({
      success: true,
      message: "Mango updated successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Mango update failed!",
      error,
    });
  }
};

//! delete mango
export const deleteMangoController = async (req: Request, res: Response) => {
  try {
    const mangoId = req.params.mangoId;
    const data = await mangoServices.deleteMangoService(mangoId);

    res.status(200).json({
      success: true,
      message: "Mango deleted successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Mango delete failed!",
      error,
    });
  }
};

//! search mango
export const searchMangoController = async (req: Request, res: Response) => {
  try {
    const name = req.query.name as string;

    const data = await mangoServices.searchMangoService(name);

    res.status(200).json({
      success: true,
      message: "Mango search successful",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Mango search failed!",
      error,
    });
  }
};