const mongoose = require("mongoose");
const { Schema } = mongoose;

const gameSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	description: {
		type: String,
	},
	system: {
		type: String,
	},
	image: {
		type: String,
	},
	// price: {
	//   type: Number,
	//   required: true,
	//   min: 0.99
	// },
	// category: {
	// 	type: Schema.Types.ObjectId,
	// 	ref: "Category",
	// 	required: true,
	// },
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
