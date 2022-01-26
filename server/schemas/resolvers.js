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
};

module.exports = resolvers;
