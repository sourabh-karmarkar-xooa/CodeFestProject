let express = require("express");
let router = express.Router();
const dbConn = require("../connect");
const { errorObj } = require("../config");

// Retrieve all item details
router.get("/", function(req, res) {
	dbConn.query("SELECT * FRM INVENTORY_DETAILS", function(error, results, fields) {
		if (error) {
			return res.status(400).send(errorObj);
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
			return res.status(400).send(errorObj);
		}
		res.setHeader("Content-Type", "application/json");
		return res.json({ error: false, data: results[0], message: "item details" });
	});
});

// Add a new inventory item
router.post("/", function(req, res) {
	let stationeryItem = req.body.stationeryItem;
	if (!stationeryItem) {
		return res.status(400).send({ error: true, message: "Please provide stationery item" });
	}

	let insertItemQuery =
		"INSERT INTO INVENTORY_DETAILS(category,label,availableQty,imgURL) VALUES('" +
		stationeryItem.category +
		"','" +
		stationeryItem.label +
		"'," +
		stationeryItem.availableQty +
		",'" +
		stationeryItem.availableQty +
		"');";
	dbConn.query(insertItemQuery, function(error, result, fields) {
		if (error) {
			return res.status(400).send(errorObj);
		}
		return res.send({ error: false, message: "New item added successfully." });
	});
});

module.exports = router;
