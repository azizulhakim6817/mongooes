import { IUser } from "./user.interface.js";
import { UserModel } from "./user.model.js";

//! create user
const createUserService = async (payload: IUser) => {
  const user = await UserModel.create(payload);
  return user;
};

//! get all users
const getAllUserService = async () => {
  const user = await UserModel.find();
  return user;
};

//! single user
const singleUserService = async (userId: string | string[] | undefined) => {
  const user = await UserModel.findById(userId);
  return user;
};

//! update user
const updateUserService = async (userId: string | string[] | undefined, updateUser: IUser) => {
  const user = await UserModel.findByIdAndUpdate(
    userId,
    updateUser,
    {
      new: true,
      runValidators: true,
    }
  );

  return user;
};

//! delete user
const deleteUserService = async (userId: string | string[] | undefined) => {
  const user = await UserModel.findByIdAndDelete(userId);
  return user;
};

//! search user
const queryUserService = async (name: string) => {
  const user = await UserModel.find({
    name: {
      $regex: name,
      $options: "i",
    },
  });

  return user;
};

// export
export const userServices = {
  createUserService,
  getAllUserService,
  singleUserService,
  updateUserService,
  deleteUserService,
  queryUserService,
};