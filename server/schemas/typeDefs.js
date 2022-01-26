const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type Query {
		games: [Game]
	}

	type Game {
		_id: ID!
		name: String!
		year: String
		description: String
		platform: [String]
		gamegenre: String
		moviegenre: String
		mode: String
	}
`;

module.exports = typeDefs;
