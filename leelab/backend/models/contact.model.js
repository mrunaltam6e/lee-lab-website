// backend/models/Contact.js
//const mongoose = require("mongoose");
import mongoose from "mongoose";
const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String },
    message: { type: String, required: true },
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
);

//module.exports = mongoose.model("Contact", contactSchema);
const Contact = mongoose.model("Contact", contactSchema);
export default Contact;