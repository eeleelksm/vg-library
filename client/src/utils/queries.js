import { gql } from "@apollo/client";

export const QUERY_GAMES = gql`
	query games($username: String) {
		games(username: $username) {
			_id
			name
			year
			description
			platform
			gamegenre
			moviegenre
			mode
		}
	}
`;

export const QUERY_GAME = gql`
	query game($_id: ID!) {
		game(_id: $_id) {
			_id
			name
			year
			description
			platform
			gamegenre
			moviegenre
			mode
		}
	}
`;

export const QUERY_ME = gql`
	{
		me {
			_id
			username
			email
			games {
				gameId
				name
				year
				description
				platform
				gamegenre
				moviegenre
				mode
			}
		}
	}
`;
