import TeachingSchedule from "../models/teachingSchedule.model.js";

export const getTeaching = async (req, res) => {
  try {
    const list = await TeachingSchedule.find();
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: "Error fetching teaching schedule", error: err.message });
  }
};

export const addTeaching = async (req, res) => {
  try {
    const { courseTitle, courseCode, schedule, semester } = req.body;

    if (!courseTitle || !courseCode || !schedule || !semester) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newTeaching = await TeachingSchedule.create({
      courseTitle,
      courseCode,
      schedule,
      semester,
    });

    res.status(201).json(newTeaching);
  } catch (err) {
    console.error("Error adding teaching schedule:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const deleteTeaching = async (req, res) => {
  try {
    const deleted = await TeachingSchedule.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Teaching schedule not found" });
    res.json({ message: "Teaching removed" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting teaching", error: err.message });
  }
};
