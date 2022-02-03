export const getSavedGamesIds = () => {
	const savedGameIds = localStorage.getItem("saved_games")
		? JSON.parse(localStorage.getItem("saved_games"))
		: [];

	return savedGameIds;
};

export const saveGameIds = (gameIdArr) => {
	if (gameIdArr.length) {
		localStorage.setItem("saved_games", JSON.stringify(gameIdArr));
	} else {
		localStorage.removeItem("saved_games");
	}
};

export const removeGameId = (_id) => {
	const savedGameIds = localStorage.getItem("saved_games")
		? JSON.parse(localStorage.getItem("saved_games"))
		: null;

	if (!savedGameIds) {
		return false;
	}

	const updatedSavedGameIds = savedGameIds?.filter(
		(savedGameId) => savedGameId !== _id
	);
	localStorage.setItem("saved_games", JSON.stringify(updatedSavedGameIds));

	return true;
};
