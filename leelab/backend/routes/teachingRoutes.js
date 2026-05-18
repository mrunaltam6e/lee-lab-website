import express from "express";
import {
  getTeaching,
  addTeaching,
  deleteTeaching,
} from "../controllers/teachingController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getTeaching);
router.post("/", protect, adminOnly, addTeaching);
router.delete("/:id", protect, adminOnly, deleteTeaching);

export default router;
