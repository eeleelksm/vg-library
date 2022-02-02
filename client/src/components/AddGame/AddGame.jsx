import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_GAME } from "../../utils/queries";
import "./addgame.scss";

function AddGame() {
	return (
		<div className="add-game">
			<form className="form">
				<input
					className="form-input"
					placeholder="Name of Game (Required)"
					name="game"
					type="game"
					id="game"
				/>
				<input
					className="form-input"
					placeholder="Year of Release"
					name="year"
					type="year"
					id="year"
				/>
				<input
					className="form-input"
					placeholder="Platform(s) (Required)"
					name="platform"
					type="platform"
					id="platform"
				/>
				<input
					className="form-input"
					placeholder="Game Genre (Required)"
					name="game-genre"
					type="game-genre"
					id="game-genre"
				/>
				<input
					className="form-input"
					placeholder="Movie Genre (Required)"
					name="movie-genre"
					type="movie-genre"
					id="movie-genre"
				/>
				<input
					className="form-input"
					placeholder="Mode (Required)"
					name="mode"
					type="mode"
					id="mode"
				/>
				<input
					className="form-input"
					placeholder="Description (Required)"
					name="description"
					type="description"
					id="description"
				/>
				<button className="btn" type="submit">
					ADD GAME
				</button>
			</form>
		</div>
	);
}

export default AddGame;
