import express from "express";
import {
  create,
  get,
  getAll,
  remove,
  update,
} from "../controllers/image_news";
import { checkPermission } from "../middlewares/checkPermission..js";
const router = express.Router();
router.get("/imagenews", getAll);
router.get("/imagenews/:id", get);
router.post("/imagenews/", create);
router.put("/imagenews/:id", update);
router.delete("/imagenews/:id", remove);
export default router;
