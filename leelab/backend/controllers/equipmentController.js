/*import Equipment from "../models/equipment.model.js";

export const getEquipment = async (req, res) => {
  const equipment = await Equipment.find();
  res.json(equipment);
};

export const addEquipment = async (req, res) => {
  const eq = new Equipment(req.body);
  const saved = await eq.save();
  res.status(201).json(saved);
};

export const updateEquipment = async (req, res) => {
  const eq = await Equipment.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(eq);
};

export const deleteEquipment = async (req, res) => {
  await Equipment.findByIdAndDelete(req.params.id);
  res.json({ message: "Equipment deleted" });
};
*/
import Equipment from "../models/equipment.model.js";

export const getEquipment = async (_req, res) => {
  try {
    const list = await Equipment.find();
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addEquipment = async (req, res) => {
  try {
    const saved = await Equipment.create(req.body);
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateEquipment = async (req, res) => {
  try {
    const updated = await Equipment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteEquipment = async (req, res) => {
  try {
    await Equipment.findByIdAndDelete(req.params.id);
    res.json({ message: "Equipment deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
