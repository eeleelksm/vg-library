const { Game } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
	Query: {
		games: async () => {
			return await Game.find().sort({ createdAt: -1 });
		},
	},
};

module.exports = resolvers;
