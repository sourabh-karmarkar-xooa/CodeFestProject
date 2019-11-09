let express = require("express");
let server = express();
let bodyParser = require("body-parser");
const inventory = require("./routes/inventoryRoute");

server.use(bodyParser.json());
server.use(
	bodyParser.urlencoded({
		extended: true
	})
);
const PORT = 3000;

// Default route
server.get("/", function(req, res) {
	return res.send({ error: true, message: "hello" });
});

server.use("/inventory", inventory);

// Set port
server.listen(PORT, function() {
	console.log("Node server is running on port 3000");
});

module.exports = server;
