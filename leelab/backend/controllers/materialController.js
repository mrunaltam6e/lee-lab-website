// backend/controllers/materialController.js
import MaterialRequest from "../models/materialRequest.model.js";

export const createMaterialRequest = async (req, res) => {
  try {
    const { itemName, quantity, reason } = req.body;

    if (!itemName || !quantity || !reason) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const request = await MaterialRequest.create({
      user: req.user.id,
      itemName,
      quantity,
      reason,
    });

    res.status(201).json(request);
  } catch (error) {
    console.error("Error creating material request:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getAllMaterialRequests = async (_req, res) => {
  try {
    const data = await MaterialRequest.find().populate("user", "name email");
    res.json(data);
  } catch (error) {
    console.error("Error loading material requests:", error);
    res.status(500).json({ message: "Server error" });
  }
};
