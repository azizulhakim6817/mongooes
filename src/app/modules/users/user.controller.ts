import { Request, Response } from "express";
import { userServices } from "./user.service";

//! create user
export const createUserController = async (req: Request, res: Response) => {
  try {
    const newBody = req.body;
    const user = await userServices.createUserService(newBody);

    res.status(201).json({
      success: true,
      message: "User is created successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User creation failed",
      error,
    });
  }
};

//! get all users
export const getAllUserController = async (req: Request, res: Response) => {
  try {
    const users = await userServices.getAllUserService();

    res.status(200).json({
      success: true,
      message: "Users retrieved successfully",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get users",
      error,
    });
  }
};

//! single user
export const singleUserController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const user = await userServices.singleUserService(userId);

    res.status(200).json({
      success: true,
      message: "User retrieved successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get user",
      error,
    });
  }
};

//! update user
export const updateUserController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const updateUser = req.body;

    const user = await userServices.updateUserService(userId, updateUser);

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User update failed",
      error,
    });
  }
};

//! delete user
export const deleteUserController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;

    const user = await userServices.deleteUserService(userId);

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User delete failed",
      error,
    });
  }
};

//! query user
export const queryUserController = async (req: Request, res: Response) => {
  try {
    const name = req.query.name as string;

    const user = await userServices.queryUserService(name);

    res.status(200).json({
      success: true,
      message: "Users found successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User search failed",
      error,
    });
  }
};