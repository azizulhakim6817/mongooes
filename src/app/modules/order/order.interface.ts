// userId, mangoId, quantity, totalPrices, status, address:country,state,street,zipcode
import { Model, Types } from "mongoose";

export interface IOrder {
  user: Types.ObjectId;
  mango: Types.ObjectId;
  quantity: number;
  totalPrice: number;
  status: string;
  address: {
    country: string;
    state: string;
    street: string;
    zipcode: string;
  };
}

//! instance method--------------------------------------------------
/* export interface IOrderInstanceMethod {
  checkStock(): Promise<void>;
}

export type IOrderModel = Model<IOrder, object, IOrderInstanceMethod>; */

//! static method-----------------------------------------------------
export interface IOrderModel extends Model<IOrder> {
  checkStock(id: string, quantity: number): Promise<void>;
}
