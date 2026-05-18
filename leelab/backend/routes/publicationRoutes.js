import express from "express";
import {
  getPublications,
  addPublication,
  updatePublication,
  deletePublication,
} from "../controllers/publicationController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getPublications);
router.post("/", protect, adminOnly, addPublication);
router.put("/:id", protect, adminOnly, updatePublication);
router.delete("/:id", protect, adminOnly, deletePublication);

export default router;
