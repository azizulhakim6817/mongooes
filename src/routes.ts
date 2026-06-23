import { Request, Response, Router } from "express";
import mangoRoute from "./app/modules/mango/mango.route.js";
import orderRoute from "./app/modules/order/order.route.js";
import userRoutes from "./app/modules/users/user.route.js";

const router = Router();

router.use("/user", userRoutes);
router.use("/mango", mangoRoute);
router.use("/order", orderRoute);

router.get("/", (req: Request, res: Response) => {
  res.send({ success: true, message: "This home page" });
});

export default router;
