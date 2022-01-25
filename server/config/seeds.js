import seeder from "mongoose-seed";
const db = require("./connection");
const { User, Game, Review } = require("../models");

seeder.connect(db, function () {
	seeder.loadModels({ User, Game, Review });
});
seeder.clearModels({});
const data = [
	{
		games: [
			{
				name: "Kingdom Hearts",
				year: "2002",
				description:
					"Sora, Riku, and Kairi build a raft with the intent to leave their home world of Destiny Islands to explore new worlds. On the night before the planned voyage, the islands are attacked by the Heartless, and Riku and Kairi disappear. Before the Heartless consume the islands, Sora mysteriously obtains the Keyblade, a weapon effective against the Heartless. Sora, chosen to wield the Keyblade—a weapon which is a cross between a key and a sword—for battling darkness, is joined by Donald Duck and Goofy to help close Kingdom Hearts and reconstruct the worlds and people lost to the Heartless. The collaboration between Disney and Square resulted in a mixture of familiar Disney and Square Final Fantasy characters, as well as several new characters created and designed by Tetsuya Nomura",
				platform: "PS2",
				image: "na",
				category: "Action RPG",
				mode: "Single Player",
			},
		],
	},
];

await User.create({
	username: "klmGamer",
	email: "klmGamer@gmail.com",
	password: "test12345",
	games: [],
});
