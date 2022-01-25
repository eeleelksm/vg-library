const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type Query {
		reviews: [Review]
	}

	type Review {
		_id: ID
		reviewText: String
		createdAt: String
		username: String
	}
`;

// ask about bringing in an image? how would i do this?
// an API needs to be brought in?

module.exports = typeDefs;
