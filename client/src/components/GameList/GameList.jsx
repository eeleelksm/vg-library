import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./gamelist.scss";

function GameList({ games }) {
	// if (!games.legnth) {
	//   return <h3>You don't have any games saved!</h3>;
	// }

	return (
		<div className="game-list">
			{games &&
				games.map((game) => (
					<Card sx={{ minWidth: 250, ml: 5 }} key={game._id} className="card">
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
									Movie Genre: {game.moviegenre}
									<br />
									Play Mode: {game.mode}
								</Typography>
								<Typography variant="body1">{game.description}</Typography>
							</div>
						</CardContent>
						<CardActions>
							<Button size="small" sx={{ textAlign: "center" }}>
								Add to Your Saved Games
							</Button>
						</CardActions>
					</Card>
				))}
		</div>
	);
}

export default GameList;
