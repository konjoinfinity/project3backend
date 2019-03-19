const mongoose = require("mongoose");
const Pet = mongoose.model("Pets");

module.exports = {
	index: function(req, res) {
		Pet.find()
			.then(pets => res.json(pets))
			.catch(err => console.log(err));
	}
};
