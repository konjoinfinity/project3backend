const mongoose = require("../db/connection");

//Set up CommentSchema first, then Pet Schema. CommentSchema is a child of the Pet Schema,
//Also want to export both in module exports
const CommentSchema = new mongoose.Schema({
	message: String
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
	licks: Number,
	comments: [CommentSchema]
});

module.exports = {
	Pet: mongoose.model("Pet", PetSchema),
	Comment: mongoose.model("Comment", CommentSchema)
};
