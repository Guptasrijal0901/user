const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    rollNo: Number,
    branch: String,
    age: Number,
    isFresher: Boolean,
});

const usermodel = mongoose.model("user", userSchema);
module.exports = usermodel;