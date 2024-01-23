const mongoose = require("mongoose");
const { URL } = require("./url");

mongoose.connect(URL);

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