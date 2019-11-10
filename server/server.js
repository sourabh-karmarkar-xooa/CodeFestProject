let express = require("express");
let server = express();
let bodyParser = require("body-parser");
const inventory = require("./routes/inventoryRoute");
const stationeryRequest = require("./routes/stationeryRequestRoute");
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
server.use("/stationeryRequest", stationeryRequest);

// Set port
server.listen(config.PORT, function() {
	console.log("Node server is running on port " + config.PORT);
});

module.exports = server;
