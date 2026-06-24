import { model, Schema } from "mongoose";
import { MangoModel } from "../mango/mango.model";
import { IOrder, IOrderModel } from "./order.interface";

// Address Schema
const AddressSchema = new Schema(
  {
    country: { type: String },
    state: { type: String },
    street: { type: String },
    zipcode: { type: String },
  },
  { _id: false },
);

// Order Schema
const orderSchema = new Schema<IOrder, IOrderModel>(
  {
    user: { type: Schema.Types.ObjectId, required: true, ref: "users" },
    mango: { type: Schema.Types.ObjectId, required: true, ref: "mangoes" },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number },
    status: { type: String, required: true },
    address: { type: AddressSchema, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

//! pre hook (calculate price)
orderSchema.pre("save", async function () {
  const mango = await MangoModel.findById(this.mango);

  if (!mango) {
    throw new Error("Mango not found");
  }

  this.totalPrice = mango.price * this.quantity;
});

//! instance method (check stock for this order)
orderSchema.method("checkStock", async function () {
  const mango = await MangoModel.findById(this.mango);

  if (!mango) {
    throw new Error("Mango not found!");
  }

  if (mango.stock <= 0) {
    throw new Error("Out of stock!");
  }

  if (mango.stock < this.quantity) {
    throw new Error("Insufficient stock!");
  }
});

//! static method (check stock before create order)
orderSchema.static("checkStock", async function (id, quantity) {
  const mango = await MangoModel.findById(id);

  if (!mango) {
    throw new Error("Mango not found!");
  }

  if (mango.stock <= 0) {
    throw new Error("Out of stock!");
  }

  if (mango.stock < quantity) {
    throw new Error("Insufficient stock!");
  }
});

export const OrderModel = model<IOrder, IOrderModel>("orders", orderSchema);
