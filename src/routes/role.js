import express from "express";
import { createRole, getRoles, getRoleById, updateRole, deleteRole } from "../controllers/role";

const router = express.Router();
router.post("/roles", createRole);
router.get("/roles", getRoles);
router.get("/roles/:roleId", getRoleById);
router.put("/roles/:roleId", updateRole);
router.delete("/roles/:roleId", deleteRole);

export default router;