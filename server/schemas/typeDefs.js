const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type Query {
		me: User
		users: [User]
		user(username: String!): User
		games(username: String): [Game]
	}

	type User {
		_id: ID
		username: String
		email: String
		savedGames: [Game]
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
