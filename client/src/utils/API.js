require("dotenv").config();
const db = require(db);

db.connect({
	clientid: process.env.DB_CLIENTID,
	secret: process.env.DB_SECRETID,
});

export const searchVideoGames = (query) => {
	return fetch(
		`https://id.twitch.tv/oauth2/token?client_id=${clientid}&client_secret=${secret}&grant_type=client_credentials`
	);
};
