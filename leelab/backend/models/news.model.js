import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  source: {
    type: String,
    enum: ["manual", "twitter"],
    default: "manual",
  },
  image: { type: String },   // ✅ Image URL
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("News", newsSchema);
