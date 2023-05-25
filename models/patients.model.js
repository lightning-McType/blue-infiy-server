const mongoose = require("mongoose");

const billSchema = new mongoose.Schema(
  {
    serviceName: { type: String },
    price: { type: Number },
    qty: { type: Number },
    amount: { type: Number },
  },
  {
    _id: false,
  }
);

const patientSchema = new mongoose.Schema(
  {
    fullName: { type: String, maxLength: 25 },
    age: { type: Number },
    gender: { type: String },
    billNo: { type: Number },
    receiptNo: { type: Number },
    mobileNo: { type: Number },
    bill: { type: [billSchema] },
  },
  {
    timestamps: true,
  }
);

const patientModel = mongoose.model("Patients", patientSchema);
module.exports = patientModel;
