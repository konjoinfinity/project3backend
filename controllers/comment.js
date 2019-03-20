const mongoose = require("mongoose");
const { Pet, Comment } = require("../models/pet");

module.exports = {
	author: function(req, res) {
		Pet.findOne({ "comments._id": req.params.id }).then(result =>
			res.json(result)
		);
	},
	index: function(req, res) {
		Comment.find()
			.then(comments => res.json(comments))
			.catch(err => console.log(err));
	},
	create: function(req, res) {
		console.log(req.params._id);
		Comment.create(req.body)
			.then(comment => res.json(comment))
			.catch(err => console.log(err));
	},
	show: function(req, res) {
		Comment.findById(req.params.id)
			.then(comment => res.json(comment))
			.catch(err => console.log(err));
	},
	update: function(req, res) {
		Comment.findByIdAndUpdate(req.params.id, req.body)
			.then(comment => res.json(comment))
			.catch(err => console.log(err));
	},
	delete: function(req, res) {
		Comment.findByIdAndDelete(req.params.id)
			.then(comment => res.json(comment))
			.catch(err => console.log(err));
	}
};
