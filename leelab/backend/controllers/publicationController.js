import Publication from "../models/publication.model.js";


export const getPublications = async (req, res) => {
  const pubs = await Publication.find();
  res.json(pubs);
};

export const addPublication = async (req, res) => {
  const pub = new Publication(req.body);
  const saved = await pub.save();
  res.status(201).json(saved);
};

export const updatePublication = async (req, res) => {
  const pub = await Publication.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(pub);
};

export const deletePublication = async (req, res) => {
  await Publication.findByIdAndDelete(req.params.id);
  res.json({ message: "Publication deleted" });
};
