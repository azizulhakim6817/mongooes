import { IMango } from "./mango.interface";
import { MangoModel } from "./mango.model";

//! create mango
const createMangoService = async (newBody: IMango) => {
  const data = await MangoModel.create(newBody);
  return data;
};

//! get all mango
const getAllMangoService = async () => {
  const data = await MangoModel.find();
  const totals = await MangoModel.countDocuments();

  return { totals, data };
};

//! single mango
const singleMangoService = async (mangoId: string | string[] | undefined) => {
  const data = await MangoModel.findById(mangoId);
  return data;
};

//! update mango
const updateMangoService = async (
  mangoId: string | string[] | undefined,
  payload: IMango
) => {
  const data = await MangoModel.findByIdAndUpdate(mangoId, payload, {
    new: true,
  });

  return data;
};

//! delete mango
const deleteMangoService = async (mangoId: string | string[] | undefined) => {
  const data = await MangoModel.findByIdAndDelete(mangoId);
  return data;
};

//! search mango
const searchMangoService = async (name: string) => {
  const data = await MangoModel.find({
    name: {
      $regex: name,
      $options: "i",
    },
  });

  return data;
};

// export
export const mangoServices = {
  createMangoService,
  getAllMangoService,
  singleMangoService,
  updateMangoService,
  deleteMangoService,
  searchMangoService,
};