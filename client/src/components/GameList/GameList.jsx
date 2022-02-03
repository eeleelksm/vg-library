import React from "react";
import { useMutation } from "@apollo/client";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { REMOVE_GAME } from "../../utils/mutations";
import "./gamelist.scss";

function GameList({ games }) {
	const [removeGame] = useMutation(REMOVE_GAME);

	function refreshPage() {
		window.location.reload(false);
	}

	// const handleDeleteGame = async (game) => {
	// 	try {
	// 		const { data } = await removeGame({
	// 			variables: { game },
	// 		});
	// 	} catch (e) {
	// 		console.error(e);
	// 	}
	// };

	return (
		<div className="game-list">
			<Grid container spacing={3} sx={{ pl: 1, mb: 3 }}>
				{games &&
					games.map((game) => (
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
											Platforms: {game.platform}
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
									<Button size="small" sx={{ textAlign: "center" }}>
										Add to Your Saved
									</Button>
									<Button
										size="small"
										sx={{ textAlign: "right" }}
										onClick={() => {
											removeGame({ variables: { id: game._id } });
											refreshPage();
										}}
									>
										Delete
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
			</Grid>
		</div>
	);
}

export default GameList;
