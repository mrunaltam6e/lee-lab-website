// backend/routes/materialRoutes.js
import express from "express";
import {
  createMaterialRequest,
  getAllMaterialRequests,
} from "../controllers/materialController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// LAB MEMBER submits material request
router.post("/", protect, createMaterialRequest);

// ADMIN views all requests
router.get("/", protect, adminOnly, getAllMaterialRequests);

export default router;
