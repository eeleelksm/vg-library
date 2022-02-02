import "./listedgames.scss";
import { useQuery } from "@apollo/client";
import { QUERY_GAMES } from "../../utils/queries";
import GameList from "../../components/GameList/GameList";
import AddGame from "../../components/AddGame/AddGame";

function SearchGames() {
	// make query request
	const { loading, data } = useQuery(QUERY_GAMES);
	const games = data?.games || [];
	console.log(games);

	return (
		<div className="search-games" id="search-games">
			<h2>Add + View Games</h2>
			<div className="add-game">
				<h3>Add Games</h3>
				<AddGame />
			</div>
			<h3>View Games</h3>
			<div className="game-list">
				<GameList games={games} />
			</div>
		</div>
	);
}

export default SearchGames;
