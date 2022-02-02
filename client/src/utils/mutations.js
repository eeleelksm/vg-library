import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
				_username
			}
		}
	}
`;

export const ADD_USER = gql`
	mutation addUser($username: String!, $email: String!, $password: String!) {
		addUser(username: $username, email: $email, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`;

export const ADD_GAME = gql`
	mutation addGame(
		$name: String!
		$year: String!
		$description: String!
		$platform: [String!]
		$gamegenre: String!
		$moviegenre: String!
		$mode: String!
	) {
		addGame(
			name: $name
			year: $year
			description: $description
			platform: $platform
			gamegenre: $gamegenre
			moviegenre: $moviegenre
			mode: $mode
		) {
			_id
			name
			year
			descriptionn
			platform
			gamegenre
			moviegenre
			mode
		}
	}
`;
