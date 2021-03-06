import React from "react";
import "./listedgames.scss";
import { useQuery } from "@apollo/client";
import { QUERY_GAMES } from "../../utils/queries";
import GameList from "../../components/GameList/GameList";
import GameForm from "../../components/GameForm/GameForm";

function SearchGames() {
	// make query request
	const { loading, data } = useQuery(QUERY_GAMES);
	const games = data?.games || [];
	console.log(games);

	return (
		<div className="listed-games" id="listed-games">
			<h2>Add + View Games</h2>
			<div className="add-game">
				<h3>Add Games</h3>
				<GameForm />
			</div>
			<h3>View Games</h3>
			<div className="game-list">
				<GameList games={games} />
			</div>
		</div>
	);
}

export default SearchGames;
