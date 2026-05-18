// backend/models/Equipment.js
//const mongoose = require("mongoose");
import mongoose from "mongoose";
const equipmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    location: { type: String },
    availability: { type: Boolean, default: true },
    image: { type: String },
    notes: { type: String },
  },
  { timestamps: true }
);

//module.exports = mongoose.model("Equipment", equipmentSchema);
const Equipment = mongoose.model("Equipment", equipmentSchema);
export default Equipment;