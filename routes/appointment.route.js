const router = require("express").Router();
const {
  createNewAppointment,
  getAllAppointments,
} = require("../controllers/appointment.controller");

router.get("/", getAllAppointments);
router.post("/new", createNewAppointment);

module.exports = router;