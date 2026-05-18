import mongoose from "mongoose";

const materialRequestSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  itemName: { type: String, required: true },
  quantity: { type: Number, required: true },
  reason: { type: String, required: true },   // correct field

  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },

  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("MaterialRequest", materialRequestSchema);
