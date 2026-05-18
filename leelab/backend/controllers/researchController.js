import Research from "../models/research.model.js";

export const getResearch = async (req, res) => {
  const research = await Research.find();
  res.json(research);
};

export const addResearch = async (req, res) => {
  const entry = new Research(req.body);
  const saved = await entry.save();
  res.status(201).json(saved);
};

export const updateResearch = async (req, res) => {
  const updated = await Research.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteResearch = async (req, res) => {
  await Research.findByIdAndDelete(req.params.id);
  res.json({ message: "Research entry deleted" });
};
