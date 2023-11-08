const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    sem: Number,
    Branch: String,
});

module.exports = mongoose.model("Student",studentSchema);