import React from "react";
import "./savedgames.scss";
// import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
// import { REMOVE_BOOK } from "../utils/mutations";
// import { removeBookId } from "../utils/localStorage";

// import Auth from "../../utils/auth";

const SavedGames = () => {
	const { loading, data } = useQuery(QUERY_ME);
	const [removeGame, { error }] = useMutation(REMOVE_GAME);

	return (
		<div className="saved-games" id="saved-games">
			<h4 className="saved-header">Your Saved Games</h4>
		</div>
	);
};

export default SavedGames;
