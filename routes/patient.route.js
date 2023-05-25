const router = require("express").Router();
const {
  createNewPatient,
  getAllPatients,
} = require("../controllers/patient.controller");

router.get("/", getAllPatients);
router.post("/new", createNewPatient);

module.exports = router;
