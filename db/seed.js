// const mongoose = require('../Model')
// const Bourbon = mongoose.model('Bourbon')
const initBourbon = require("./seed-data.json");

User.remove({})
	.then(() => {
		User.collection.insert(initBourbon).then(bourbons => {
			console.log(bourbons);
			process.exit();
		});
	})
	.catch(err => console.log(err));
