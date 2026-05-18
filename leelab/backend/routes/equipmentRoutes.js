import express from "express";
import {
  getEquipment,
  addEquipment,
  updateEquipment,
  deleteEquipment,
} from "../controllers/equipmentController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getEquipment);
router.post("/", protect, adminOnly, addEquipment);
router.put("/:id", protect, adminOnly, updateEquipment);
router.delete("/:id", protect, adminOnly, deleteEquipment);

export default router;
