const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const userSchema = new Schema(
	{
		username: {
			type: String,
			unique: true,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			match: [/.+@.+\..+/, "Must match an email address!"],
		},
		password: {
			type: String,
			required: true,
			minlength: 5,
		},
		savedGames: [gameSchema],
		review: [
			{
				type: Schema.Types.ObjectId,
				ref: "Review",
			},
		],
	},
	{
		toJSON: {
			virtuals: true,
		},
	}
);

// hash the user's password
userSchema.pre("save", async function (next) {
	if (this.isNew || this.isModified("password")) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}
	next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
	return bcrypt.compare(password, this.password);
};

// when we query a user, we'll get a field called `gameCount`
// with the number of saved games the user has
userSchema.virtual("gameCount").get(function () {
	return this.savedGames.length;
});

const User = mongoose.model("User", userSchema);

module.exports = User;
