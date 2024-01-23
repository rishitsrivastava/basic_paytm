const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://rishitsrivastava43:cyjptxI2gG3WydtM@cluster0.ujqzsu8.mongodb.net/");

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
})

const User = mongoose.model("User", userSchema);

module.exports = {
    User
}