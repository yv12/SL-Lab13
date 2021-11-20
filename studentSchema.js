const mongoose = require("mongoose")
const { Schema } = mongoose;

const studentSchema = new Schema({
  Name:  String,
  Registration: String,
  Marks: String,

});

module.exports = mongoose.model("data",studentSchema,"SL-Lab13")