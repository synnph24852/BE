import express from "express";
import formdata from "express-form-data";
import * as Order from "../controllers/order";
import * as per from "../middlewares/checkPermission.js";

const router = express.Router();

router.post("/order", Order.OrderUser);
router.get("/GetDetailOrder", Order.GetDetailOrder);

export default router;
