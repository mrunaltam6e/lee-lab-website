import mongoose from "mongoose";

const TeachingScheduleSchema = new mongoose.Schema(
  {
    courseTitle: { type: String, required: true },
    courseCode: { type: String, required: true },
    schedule: { type: String, required: true },
    semester: { type: String, required: true },   // REQUIRED FIELD
  },
  { timestamps: true }
);

export default mongoose.model("TeachingSchedule", TeachingScheduleSchema);
