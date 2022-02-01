import "./searchgames.scss";
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
			{/* <div>GAME LIST</div> */}
      <h3>listed games</h3>
			<GameList />
		</div>
	);
}

export default SearchGames;
