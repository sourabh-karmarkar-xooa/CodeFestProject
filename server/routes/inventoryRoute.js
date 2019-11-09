let express = require("express");
let router = express.Router();
let mysql = require("mysql");
const { config } = require("../config");

// Connection configurations
let dbConn = mysql.createConnection(config.databaseDetail);
// Connect to database
dbConn.connect();

// Retrieve all item details
router.get("/", function(req, res) {
	dbConn.query("SELECT * FROM INVENTORY_DETAILS", function(error, results, fields) {
		if (error) {
			return res.status(400).send({ error: true, message: "Some Error Occured" });
		}
		res.setHeader("Content-Type", "application/json");
		return res.json({ error: false, data: results, message: "inventory list" });
	});
});

// Retrieve item with id
router.get("/:id", function(req, res) {
	let item_Id = req.params.id;

	if (!item_Id) {
		return res.status(400).send({ error: true, message: "Please provide item_Id" });
	}

	dbConn.query("SELECT * FROM INVENTORY_DETAILS where id=?", item_Id, function(error, results, fields) {
		if (error) {
			return res.status(400).send({ error: true, message: "Some Error Occured" });
		}
		res.setHeader("Content-Type", "application/json");
		return res.json({ error: false, data: results[0], message: "item details" });
	});
});

module.exports = router;
