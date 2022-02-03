import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_GAME } from "../../utils/mutations";
import { QUERY_GAMES, QUERY_ME } from "../../utils/queries";
import "./gameform.scss";

const GameForm = () => {
	const [addGames, setAddGames] = useState({
		name: "",
		year: "",
		description: "",
		platform: "",
		gamegenre: "",
		moviegenre: "",
		mode: "",
	});

	const [addGame, { error }] = useMutation(ADD_GAME, {
		update(cache, { data: { addGame } }) {
			// read what is in the cache currently
			try {
				const { games } = cache.readQuery({ query: QUERY_GAMES });
				// prep newest thought to front of the game array
				cache.writeQuery({
					query: QUERY_GAMES,
					data: { games: [addGame, ...games] },
				});
			} catch (e) {
				console.error(e);
			}

			// update me object's cache, add new game to the end of that array
			const { me } = cache.readQuery({ query: QUERY_ME });
			cache.writeQuery({
				query: QUERY_ME,
				data: { me: { ...me, games: [...me.games, addGame] } },
			});
		},
	});

	const handleChange = (event) => {
		setAddGames(event.target.value);
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		try {
			await addGame({
				variables: { addGames },
			});

			// clear form
			setAddGames("");
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div className="add-game">
			<form className="form" onSubmit={handleFormSubmit}>
				<input
					className="form-input"
					placeholder="Name of Game (Required)"
					name="game"
					value={addGames.name}
					onChange={handleChange}
				/>
				<input
					className="form-input"
					placeholder="Year of Release"
					name="year"
					type="year"
					id="year"
					value={addGames.year}
					onChange={handleChange}
				/>
				<input
					className="form-input"
					placeholder="Platform(s) (Required)"
					name="platform"
					type="platform"
					id="platform"
					value={addGames.platform}
					onChange={handleChange}
				/>
				<input
					className="form-input"
					placeholder="Game Genre (Required)"
					name="game-genre"
					type="game-genre"
					id="game-genre"
					value={addGames.gamegenre}
					onChange={handleChange}
				/>
				<input
					className="form-input"
					placeholder="Movie Genre (Required)"
					name="movie-genre"
					type="movie-genre"
					id="movie-genre"
					value={addGames.moviegenre}
					onChange={handleChange}
				/>
				<input
					className="form-input"
					placeholder="Mode (Required)"
					name="mode"
					type="mode"
					id="mode"
					value={addGames.mode}
					onChange={handleChange}
				/>
				<input
					className="form-input"
					placeholder="Description (Required)"
					name="description"
					type="description"
					id="description"
					value={addGames.description}
					onChange={handleChange}
				/>
				<button className="btn" type="submit">
					ADD GAME
				</button>
			</form>
		</div>
	);
};

export default GameForm;
