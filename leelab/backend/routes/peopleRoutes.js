import express from "express";
import {
  getPeople,
  addPerson,
  updatePerson,
  deletePerson,
} from "../controllers/peopleController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getPeople);
router.post("/", protect, adminOnly, addPerson);
router.put("/:id", protect, adminOnly, updatePerson);
router.delete("/:id", protect, adminOnly, deletePerson);

export default router;
