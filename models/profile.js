const mongoose = require("../db/connection");

//Set up CommentSchema first, then Pet Schema. CommentSchema is a child of the Pet Schema,
//Also want to export both in module exports
const CommentSchema = new mongoose.Schema({
  message: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const PetSchema = new mongoose.Schema({
  name: String,
  description: String,
  species: {
    type: String,
    enum: ["Cat", "Dog"]
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  url: String,
  likes: Number,
  comments: [CommentSchema]
});

module.exports = {
  PetSchema: mongoose.model("Pet", PetSchema),
  CommentSchema: mongoose.model("Comment", CommentSchema)
};
