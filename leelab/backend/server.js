import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import equipmentRoutes from "./routes/equipmentRoutes.js";
import materialRoutes from "./routes/materialRoutes.js";
import newsRoutes from "./routes/newsRoutes.js";
import peopleRoutes from "./routes/peopleRoutes.js";
import publicationRoutes from "./routes/publicationRoutes.js";
import researchRoutes from "./routes/researchRoutes.js";
import teachingRoutes from "./routes/teachingRoutes.js";

import { notFound, errorHandler } from "./middleware/errorHandler.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Lee Lab API running");
});

// ROUTES (ORDER IS IMPORTANT)
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/equipment", equipmentRoutes);
app.use("/api/materials", materialRoutes);   // ✅ FIXED — keep BEFORE teaching/news
app.use("/api/news", newsRoutes);
app.use("/api/people", peopleRoutes);
app.use("/api/publications", publicationRoutes);
app.use("/api/research", researchRoutes);
app.use("/api/teaching", teachingRoutes);

// ERROR HANDLERS
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
