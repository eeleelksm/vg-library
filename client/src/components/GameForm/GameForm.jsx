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

	const handleChange = (name, value) => {
		setAddGames((prevState) => {
			return { ...prevState, [name]: value };
		});
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
					name="name"
					id="name"
					value={addGames.name}
					onChange={(e) => handleChange("name", e.target.value)}
				/>
				<input
					className="form-input"
					placeholder="Year of Release"
					name="year"
					id="year"
					value={addGames.year}
					onChange={(e) => handleChange("year", e.target.value)}
				/>
				<input
					className="form-input"
					placeholder="Platform(s) (Required)"
					name="platform"
					id="platform"
					value={addGames.platform}
					onChange={(e) => handleChange("platform", e.target.value)}
				/>
				<input
					className="form-input"
					placeholder="Game Genre (Required)"
					name="gamegenre"
					id="gamegenre"
					value={addGames.gamegenre}
					onChange={(e) => handleChange("gamegenre", e.target.value)}
				/>
				<input
					className="form-input"
					placeholder="Movie Genre (Required)"
					name="moviegenre"
					id="moviegenre"
					value={addGames.moviegenre}
					onChange={(e) => handleChange("moviegenre", e.target.value)}
				/>
				<input
					className="form-input"
					placeholder="Mode (Required)"
					name="mode"
					id="mode"
					value={addGames.mode}
					onChange={(e) => handleChange("mode", e.target.value)}
				/>
				<input
					className="form-input"
					placeholder="Description (Required)"
					name="description"
					id="description"
					value={addGames.description}
					onChange={(e) => handleChange("description", e.target.value)}
				/>
				<button className="btn" type="submit">
					ADD GAME
				</button>
			</form>
		</div>
	);
};

export default GameForm;
