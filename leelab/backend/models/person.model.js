// backend/models/Person.js
//const mongoose = require("mongoose");
import mongoose from "mongoose";
const personSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String }, // e.g., Professor, Postdoc, PhD Student
    bio: { type: String },
    photo: { type: String },
    email: { type: String },
    website: { type: String },
    linkedIn: { type: String },
    googleScholar: { type: String },
    order: { type: Number, default: 0 }, // for ordering on people page
  },
  { timestamps: true }
);

//module.exports = mongoose.model("Person", personSchema);
const Person = mongoose.model("Person", personSchema);
export default Person;