const mongoose = require("../db/connection");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  pets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pet"
    }
  ]
});

UserSchema.pre("save", function(next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});

module.exports = mongoose.model("User", UserSchema);
