const { Review } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
	Query: {
		reviews: async () => {
			return Review.find().sort({ createdAt: -1 });
		},
	},
};

module.exports = resolvers;
