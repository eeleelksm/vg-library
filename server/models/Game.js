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
	platform: {
		type: String,
	},
	gamegenre: {
		type: String,
	},
	moviegenre: {
		type: String,
	},
	mode: {
		type: String,
	},
	// category: {
	// 	type: Schema.Types.ObjectId,
	// 	ref: "Category",
	// 	required: true,
	// },
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
