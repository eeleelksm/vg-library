const { gql } = require("apollo-server-express");

const typeDefs = gql`
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

	input GameInput {
		_id: ID!
		name: String!
		year: String
		description: String
		platform: [String]
		gamegenre: String
		moviegenre: String
		mode: String
	}

	type Query {
		me: User
		users: [User]
		user(username: String!): User
		games(username: String): [Game]
	}

	type Mutation {
		login(email: String!, password: String!): Auth
		addUser(username: String!, email: String!, password: String!): Auth
		addGame(
			name: String!
			year: String!
			description: String!
			platform: [String!]
			gamegenre: String!
			moviegenre: String!
			mode: String!
		): Game
	}

	type Auth {
		token: ID!
		user: User
	}
`;

module.exports = typeDefs;
