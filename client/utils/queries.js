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
	query game($id: ID!) {
		game(_id: $id) {
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

export const QUERY_USER = gql`
	query user($username: String!) {
		user(username: $username) {
			_id
			username
			email
			games {
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
	}
`;

export const QUERY_ME = gql`
	{
		me {
			_id
			username
			email
			games {
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
	}
`;

export const QUERY_ME_BASIC = gql`
	{
		me {
			_id
			username
			email
		}
	}
`;
