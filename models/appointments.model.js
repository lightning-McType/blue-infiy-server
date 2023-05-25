const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patientName: { type: String },
  patientPhone: { type: String },
  appointmentDate: { type: String },
});

const appointmentModel = mongoose.model("Appointments", appointmentSchema);
module.exports = appointmentModel;
