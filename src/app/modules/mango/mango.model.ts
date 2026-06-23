import { model, Schema } from "mongoose";
import { IMango } from "./mango.interface.js";

const mangoSchema = new Schema<IMango>(
  {
    name: { type: String, required: true },
    variety: { type: String, required: true },

    unit: {
      type: String,
      required: true,
      enum: {
        values: ["KG", "TON"],
        message: "Unit must be KG or TON",
      },
      default: "KG",
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },

    stock: {
      type: Number,
      required: true,
      min: 0,
    },

    origin: { type: String },

    season: {
      type: String,
      enum: ["Summer", "Winter"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const MangoModel = model<IMango>("mangoes", mangoSchema);