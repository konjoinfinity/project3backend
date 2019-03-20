const mongoose = require("../db/connection");

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

mongoose.model("User", UserSchema);

module.exports = mongoose;
