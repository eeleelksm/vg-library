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

export const removeGameId = ({game._id}) => {
	const savedBookIds = localStorage.getItem("saved_games")
		? JSON.parse(localStorage.getItem("saved_games"))
		: null;

	if (!savedBookIds) {
		return false;
	}

	const updatedSavedBookIds = savedBookIds?.filter(
		(savedBookId) => savedBookId !== bookId
	);
	localStorage.setItem("saved_games", JSON.stringify(updatedSavedBookIds));

	return true;
};
