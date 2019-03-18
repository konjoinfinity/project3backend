const mongoose = require("../db/connection");

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  pets: [
    {
      type: Schema.Types.ObjectId,
      ref: "Pet"
    }
  ]
});

module.exports = mongoose.model("User", UserSchema);
