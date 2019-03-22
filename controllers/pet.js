const mongoose = require("mongoose");
const { Pet, Comment } = require("../models/pet");

module.exports = {
	index: (req, res) => {
		Pet.find()
			.sort({ licks: -1 })
			.then(pets => res.json(pets))
			.catch(err => console.log(err));
	},
	create: (req, res) => {
		Pet.create(req.body).then(pet => res.json(pet));
	},
	show: (req, res) => {
		Pet.findOne({ _id: req.params.id }).then(pet => res.json(pet));
	},
	update: (req, res) => {
		Pet.findByIdAndUpdate({ _id: req.params.id }, req.body, {
			new: true
		}).then(pet => res.json(pet));
	},
	delete: (req, res) => {
		Pet.findByIdAndDelete(req.params.id).then(pet => {
			pet.comments.forEach(comment =>
				Comment.findByIdAndDelete(comment._id).then(comment =>
					res.json(comment)
				)
			);
			res.json(pet);
		});
	},

	comment: (req, res) => {
		Comment.create(req.body).then(newCommentRequest => {
			Pet.findOneAndUpdate(
				{ _id: req.params.id },
				{ $push: { comments: newCommentRequest } }
			).then(pet => {
				pet.save((err, pet) => {
					res.json(pet);
				});
			});
		});
	},

	lickUpdate: (req, res) => {
		Pet.findByIdAndUpdate(
			{ _id: req.params.id },
			{ $inc: { licks: 1 } },
			{ new: true }
		).then(pet => {
			pet.save((err, pet) => {
				res.json(pet);
			});
		});
	},

	delcomment: (req, res) => {
		const deleteComment = { _id: req.body.body };
		console.log(deleteComment);
		Pet.findOneAndUpdate(
			{ _id: req.params.id },
			{ $pull: { comments: deleteComment } }
		).then(pet => {
			pet.save((err, pet) => {
				res.json(pet);
			});
		});

		Comment.findByIdAndDelete(deleteComment._id).then(comment =>
			res.json(comment)
		);
	}
};
