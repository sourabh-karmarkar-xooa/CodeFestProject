let express = require("express");
let server = express();
let bodyParser = require("body-parser");
const inventory = require("./routes/inventoryRoute");
const { config } = require("./config");

server.use(bodyParser.json());
server.use(
	bodyParser.urlencoded({
		extended: true
	})
);

// Default route
server.get("/", function(req, res) {
	return res.send({ error: true, message: "hello" });
});

server.use("/inventory", inventory);

// Set port
server.listen(config.PORT, function() {
	console.log("Node server is running on port 3000");
});

module.exports = server;
