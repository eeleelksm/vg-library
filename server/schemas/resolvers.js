const { User, Game } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
	Query: {
		me: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findOne({ _id: context.user._id })
					.select("-__v -password")
					.populate(games);
				return userData;
			}

			throw new AuthenticationError("You are not logged in");
		},
		// get all users
		users: async () => {
			return User.find().select("-__v -password");
		},
		// get a user by username
		user: async (parent, { username }) => {
			return User.findOne({ username }).select("-__v -password");
		},
		games: async () => {
			return await Game.find().sort({ createdAt: -1 });
		},
	},
	Mutation: {
		addUser: async (parent, args) => {
			const user = await User.create(args);
			return user;
		},
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });
			if (!user) {
				throw new AuthenticationError("Incorrect credentials. Please try again.");
			}
			const correctPw = await user.isCorrectPassword(password);
			if (!correctPw) {
				throw new AuthenticationError("Incorrect credentials");
			}
			return user;
		},
	},
};

module.exports = resolvers;
