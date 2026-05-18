/*import Contact from "../models/contact.model.js";

export const submitContact = async (req, res) => {
  const contact = new Contact(req.body);
  const saved = await contact.save();
  res.status(201).json(saved);
};

export const getContacts = async (req, res) => {
  const contacts = await Contact.find().sort({ createdAt: -1 });
  res.json(contacts);
};*/
import Contact from "../models/contact.model.js";

export const submitContact = async (req, res) => {
  try {
    const saved = await Contact.create(req.body);
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

