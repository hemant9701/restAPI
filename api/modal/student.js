const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: String,
    class: String,
    rollno: Number,
    dob: String,
    gender: String,
    address: String
});

module.exports = mongoose.model("Student", studentSchema);