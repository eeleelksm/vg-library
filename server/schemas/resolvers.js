const { User, Game } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
	Query: {
		me: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findOne({ _id: context.user._id })
					.select("-__v -password")
					.populate("savedGames");
				return userData;
			}
			throw new AuthenticationError("You need to be logged in");
		},

		// get all users
		users: async () => {
			return User.find().select("-__v -password").populate("savedGames");
		},

		// get a user by username
		user: async (parent, { username }) => {
			return User.findOne({ username })
				.select("-__v -password")
				.populate("savedGames");
		},

		// get all games
		games: async () => {
			return await Game.find().sort({ createdAt: -1 });
		},
	},

	Mutation: {
		addUser: async (parent, args) => {
			const user = await User.create(args);
			const token = signToken(user);
			return { token, user };
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
			const token = signToken(user);
			return { token, user };
		},

		addGame: async (parent, args, context) => {
			if (context.user) {
				const game = await Game.create({ ...args, username: context.user.username });

				await User.findByIdAndUpdate(
					{ _id: context.user._id },
					{ $push: { savedGames: game._id } },
					{ new: true }
				);
				return game;
			}
			throw new AuthenticationError("You need to be logged in.");
		},

		removeGame: async (parent, args, context, info) => {
			for (let i in games) {
				if (games[i]._id === args.id) {
					games.splice(i, 1);
				}
			}
			return args.id;
		},
		// 	if (context.user) {
		// 		const updatedUser = await User.findOneAndUpdate(
		// 			{ _id: context.user._id },
		// 			{ $pull: { savedGames: _id } },
		// 			{ new: true }
		// 		).populate("savedGames");
		// 		return updatedUser;
		// 	}
		// 	throw new AuthenticationError("You need to login.");
		// },
	},
	// saveGame: async (parent, { gameData }, context) => {
	// 	if (context.user) {
	// 		const updatedUser = await User.findByIdAndUpdate(
	// 			{ _id: context.user._id },
	// 			{ $addToSet: { savedGames: gameData } },
	// 			{ new: true }
	// 		);
	// 		return updatedUser;
	// 	}
	// 	throw new AuthenticationError("You need to be logged in.");
	// },
};

module.exports = resolvers;
