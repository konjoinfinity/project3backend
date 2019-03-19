const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = {
	index: function(req, res) {
		Comment.find()
			.then(comments => res.json(comments))
			.catch(err => console.log(err));
	},
	show: function(req, res) {
		Comment.findById(req.params.id)
			.then(comment => res.json(comment))
			.catch(err => console.log(err));
	}
};
