import express from "express";
import {
  getResearch,
  addResearch,
  updateResearch,
  deleteResearch,
} from "../controllers/researchController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getResearch);
router.post("/", protect, adminOnly, addResearch);
router.put("/:id", protect, adminOnly, updateResearch);
router.delete("/:id", protect, adminOnly, deleteResearch);

export default router;
