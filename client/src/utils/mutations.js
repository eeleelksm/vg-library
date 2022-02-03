import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
	mutation Login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
				email
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
	mutation addGame($name: String!) {
		addGame(name: $name) {
			_id
			name
		}
	}
`;

export const REMOVE_GAME = gql`
	mutation removeGame($_id: ID!) {
		removeGame(_id: $_id) {
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

export const SAVE_GAME = gql`
	mutation saveGame($gameData: GameInput!) {
		saveGame(gameData: $gameData) {
			_id
			username
			email
			savedGames {
				name
				year
				descriptionn
				platform
				gamegenre
				moviegenre
				mode
			}
		}
	}
`;
