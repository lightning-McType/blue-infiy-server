const Appointments = require("../models/appointments.model");

const getAllAppointments = async (req, res) => {
  try {
    const result = await Appointments.find({});
    res.json(result);
  } catch (err) {
    res.status(404).json({ message: "Couldn't get the appointments" });
  }
};

const createNewAppointment = async (req, res) => {
  try {
    const newAppointment = await Appointments(req.body);
    const result = await newAppointment.save();
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllAppointments,
  createNewAppointment,
};
