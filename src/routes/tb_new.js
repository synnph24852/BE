import express from "express";
import {
  add,
  deletenews,
  get,
  getAll,
  update,
} from "../controllers/tb_news";
import { checkPermission } from "../middlewares/checkPermission.";
const router = express.Router();
router.get("/news", getAll);
router.get("/news/:id", get);
router.post("/news", add);
router.put("/news/:id", update);
router.delete("/news/:id",  deletenews);

export default router;
