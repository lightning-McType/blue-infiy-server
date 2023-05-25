const Patients = require("../models/patients.model");

const getAllPatients = async (req, res) => {
  try {
    const result = await Patients.find({});
    res.json(result);
  } catch (err) {
    res.status(404).json({ message: "Couldn't get the patients" });
  }
};

const createNewPatient = async (req, res) => {
  try {
    const newPatient = await Patients(req.body);
    const result = await newPatient.save();
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllPatients,
  createNewPatient,
};
