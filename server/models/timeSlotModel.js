const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TimeSlotSchema = new Schema(
  {
    startDate: Number,
    endDate: Number,
    user: mongoose.ObjectID
  },
  { timestamps: true }
);

module.exports = mongoose.model("Data", TimeSlotSchema);