import Person from "../models/person.model.js";

// GET all people
export const getPeople = async (req, res) => {
  const people = await Person.find();
  res.json(people);
};

// POST (Admin adds a person)
export const addPerson = async (req, res) => {
  const person = new Person(req.body);
  const saved = await person.save();
  res.status(201).json(saved);
};

// PUT (Admin edits)
export const updatePerson = async (req, res) => {
  const person = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(person);
};

// DELETE
export const deletePerson = async (req, res) => {
  await Person.findByIdAndDelete(req.params.id);
  res.json({ message: "Person removed" });
};
