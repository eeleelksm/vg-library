import React from "react";
import "./savedgames.scss";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import { REMOVE_GAME } from "../../utils/mutations";
import { removeGameId } from "../../utils/localStorage";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import Auth from "../../utils/auth";

const SavedGames = () => {
	const { loading, data } = useQuery(QUERY_ME);
	const [removeGame, { error }] = useMutation(REMOVE_GAME);

	const userData = data?.me || {};

	// crate function that accepts game's _id
	const handleDeleteGame = async (_id) => {
		const token = Auth.loggedId() ? Auth.getToken() : null;

		if (!token) {
			return false;
		}

		try {
			const { data } = await removeGame({
				variables: { savedGames: _id },
			});

			removeGameId(_id);
		} catch (e) {
			console.error(e);
		}
	};

	// if loading, display message until data appears
	if (loading) {
		return <h2>LOADING...</h2>;
	}

	return (
		<div className="saved-games" id="saved-games">
			<h4 className="saved-header">Your Saved Games</h4>
			<h2>
				{userData.savedGames?.length
					? `Viewing ${userData.savedGames.length} saved ${
							userData.savedGames.length === 1 ? "game" : "games"
					  }:`
					: "You have no saved games!"}
			</h2>

			{/* game cards */}
			<div className="game-list">
				<Grid container spacing={3} sx={{ pl: 1, mb: 3 }}>
					{userData.savedGames?.map((game) => {
						return (
							<Grid item xs={4} key={game.gameId}>
								<Card sx={{ minWidth: 250, ml: 2 }} className="card">
									<CardContent>
										<div>
											<Typography variant="h5" component="div">
												{game.name}
											</Typography>
											<Typography sx={{ mb: 1.5 }} color="text.secondary">
												Year: {game.year}
												<br />
												Platforms: {game.platforms}
												<br />
												Game Genre: {game.gamegenre}
												<br />
												Movie Genre: {game.moviegenre}
												<br />
												Play Mode: {game.mode}
											</Typography>
											<Typography variant="body1">{game.description}</Typography>
										</div>
									</CardContent>
									<CardActions>
										<Button
											size="small"
											sx={{ textAlign: "right" }}
											onClick={() => handleDeleteGame(game._id)}
										>
											Delete this Game
										</Button>
									</CardActions>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</div>
		</div>
	);
};

export default SavedGames;
