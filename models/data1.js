const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    tittle: String,
    caste: String,
    dob: Number
});
const usermodel = mongoose.model("data1", userSchema);
module.exports = usermodel;
