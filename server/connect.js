let mysql = require("mysql");
const { config } = require("./config");

// Connection configurations
let dbConn = mysql.createConnection(config.databaseDetail);

// Connect to database
dbConn.connect(function(err) {
	if (err) {
		return console.error("error: " + err.message);
	}
	console.log("Connected to the MySQL server.");
});

module.exports = dbConn;
