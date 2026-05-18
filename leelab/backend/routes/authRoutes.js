/*import express from "express";
import {
  registerUser,
  loginUser,
  getProfile,
} from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getProfile);

router.get("/all", requireAdmin, authController.getAllUsers);
router.put("/update-role/:id", requireAdmin, authController.updateRole);
router.delete("/:id", requireAdmin, authController.deleteUser);


export default router;
*/
import express from "express";
import {
  registerUser,
  loginUser,
  getProfile,
  getAllUsers,
  updateRole,
  deleteUser,
} from "../controllers/authController.js";

import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public
router.post("/register", registerUser);
router.post("/login", loginUser);

// Logged-in user
router.get("/profile", protect, getProfile);

// Admin-only
router.get("/all", protect, adminOnly, getAllUsers);
router.put("/update-role/:id", protect, adminOnly, updateRole);
router.delete("/:id", protect, adminOnly, deleteUser);

export default router;
