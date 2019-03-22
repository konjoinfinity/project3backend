const mongoose = require("../db/connection");

const CommentSchema = new mongoose.Schema({
  message: String,
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const PetSchema = new mongoose.Schema({
  name: String,
  description: String,
  species: {
    type: String,
    enum: ["Cat", "Dog"]
  },
  profilepicture: String,
  sociallink: String,
  licks: {
    type: Number,
    default: 0
  },
  comments: [CommentSchema]
});

module.exports = {
  Pet: mongoose.model("Pet", PetSchema),
  Comment: mongoose.model("Comment", CommentSchema)
};
