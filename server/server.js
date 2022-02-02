const express = require("express");
const app = express();
// const path = require("path");
const db = require("./config/connection");

const { ApolloServer } = require("apollo-server-express");
const { authMiddleware } = require("./utils/auth");
const { typeDefs, resolvers } = require("./schemas");

const PORT = process.env.PORT || 3003;

const startServer = async () => {
	// create a new Apollo server and pass in our schema data
	const server = new ApolloServer({
		typeDefs,
		resolvers,
		context: authMiddleware,
	});

	await server.start();

	server.applyMiddleware({ app });
	console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

// Initialize the Apollo server
startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if (process.env.NODE_ENV === "production") {
// 	app.use(express.static(path.join(__dirname, "../client/build")));
// }

// app.get("*", (req, res) => {
// 	res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

db.once("open", () => {
	app.listen(PORT, () => {
		console.log(`API server running on port ${PORT}!`);
	});
});
