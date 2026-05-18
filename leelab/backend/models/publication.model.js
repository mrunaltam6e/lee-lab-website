// backend/models/Publication.js
//const mongoose = require("mongoose");
import mongoose from "mongoose";
const publicationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    authors: { type: String },
    journal: { type: String },
    year: { type: Number },
    doi: { type: String },
    link: { type: String },
    abstract: { type: String },
    tags: [String],
  },
  { timestamps: true }
);

//module.exports = mongoose.model("Publication", publicationSchema);
const Publication = mongoose.model("Publication", publicationSchema);
export default Publication;