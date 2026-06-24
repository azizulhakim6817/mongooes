import { IOrder } from "./order.interface";
import { OrderModel } from "./order.model";

//! create order service
const createService = async (newBody: IOrder) => {
  //! by default create order---------------------------------
  /* const order = await OrderModel.create(newBody);
  return order; */

  //! custom static-2 method----------------------------
  await OrderModel.checkStock(newBody.mango.toString(), newBody.quantity);
  
  const order = await OrderModel.create(newBody);
  return order;

  //! by default instance method create order---------------------------------
  /* const data = new OrderModel(newBody);
  await data.save();
  return data; */

  //! by default instance method create order---------------------------------
  /*  const data = new OrderModel(newBody);
  await data.checkStock();
  await data.save(); 
  return data */
};

//! get all orders service
const allOrderService = async () => {
  const order = await OrderModel.find().populate("user").populate("mango");

  return order;
};

// export
export const orderService = {
  createService,
  allOrderService,
};
