import { Games } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./gamelist.scss";

const GameList = ({ games }) => {
	// if (!games.legnth) {
	//   return <h3>You don't have any games saved!</h3>;
	// }

	return (
		<div className="game-list">
			<Card sx={{ maxWidth: 250, ml: 5 }}>
				<CardContent>
					{games &&
						games.map((game) => (
							<Typography key={game._id} variant="h5" component="div">
								{game.name}
							</Typography>
						))}

					<Typography sx={{ mb: 1.5 }} color="text.secondary">
						year
						<br />
						platforms
						<br />
						movie genre
						<br />
						mode
					</Typography>
					<Typography variant="body1">description</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" sx={{ textAlign: "center" }}>
						Add to Your Saved Games
					</Button>
				</CardActions>
			</Card>
		</div>
	);
};

export default GameList;
