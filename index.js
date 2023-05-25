require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const mongodb_password = process.env.password;

const patientRoutes = require("./routes/patient.route");
const appointmentRoutes = require("./routes/appointment.route");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.port || 5000;

const mongodb_uri = `mongodb+srv://sam996610:${mongodb_password}@cluster0.feyv5kj.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(mongodb_uri)
  .then(() => {
    console.log(`Connected to database at ${mongodb_uri}`);
  })
  .catch((err) => console.log(`Could not connect to DB at ${mongodb_uri}`));

app.use("/patients", patientRoutes);
app.use("/appointments", appointmentRoutes);

app.listen(PORT, () => {
  console.log(`Started listening on ${PORT}...`);
});
