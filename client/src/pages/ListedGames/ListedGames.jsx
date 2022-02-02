import "./listedgames.scss";
import { useQuery } from "@apollo/client";
import { QUERY_GAMES } from "../../utils/queries";
import GameList from "../../components/GameList/GameList";

function SearchGames() {
	// make query request
	const { loading, data } = useQuery(QUERY_GAMES);
	const games = data?.games || [];
	console.log(games);

	return (
		<div className="search-games" id="search-games">
			<h3>Add + View Games</h3>
			<div className="game-list">
				<GameList games={games} />
			</div>
		</div>
	);
}

export default SearchGames;
