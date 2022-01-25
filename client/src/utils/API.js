export const searchVideoGames = (query) => {
	return fetch(
		`https://id.twitch.tv/oauth2/token?client_id=zsfmht6bpnp5d7vanh77x3yvwuabm6&client_secret=atovij2e23b2xp0g2lzkciqtacb5lv&grant_type=client_credentials`
	);
};
