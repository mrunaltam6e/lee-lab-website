import express from "express";
import {
  getNews,
  addNews,
  updateNews,
  deleteNews,
  importFromTwitter,
} from "../controllers/newsController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// PUBLIC
router.get("/", getNews);

// ADMIN
router.post("/", protect, adminOnly, addNews);
router.put("/:id", protect, adminOnly, updateNews);
router.delete("/:id", protect, adminOnly, deleteNews);

// TWITTER IMPORT
router.post("/twitter/import", protect, adminOnly, importFromTwitter);

export default router;
