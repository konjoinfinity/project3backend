const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = {
	index: function(req, res) {
		Comment.find()
			.then(comments => res.json(comments))
			.catch(err => console.log(err));
	},
	create: function(req, res) {
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
			.then(() => Comments.find().then(comments => res.json(comments)))
			.catch(err => console.log(err));
	}
};
