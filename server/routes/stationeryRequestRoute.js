let express = require("express");
let router = express.Router();
const dbConn = require("../connect");
const { errorObj } = require("../config");

// Retrieve all request details
router.get("/", function(req, res) {
	dbConn.query("SELECT * FROM EMPLOYEE_REQUESTS", function(employeeRequestError, employeeRequests, fields) {
		if (employeeRequestError) {
			return res.status(400).send(errorObj);
		}
		dbConn.query("SELECT * FROM REQUEST_DETAIL", function(requestDetailError, requestDetails, fields) {
			if (requestDetailError) {
				return res.status(400).send(errorObj);
			}

			/**
			 * Form the stationery requests array of objects
			 */
			let detailsArray = [];
			for (let i = 0; i < employeeRequests.length; i++) {
				let employeeRequestObj = employeeRequests[i];
				let requestDetailsArray = requestDetails.filter(item => {
					return item.req_id === employeeRequestObj.req_id;
				});
				let itemsArray = [];
				for (let itemCounter = 0; itemCounter < requestDetailsArray.length; itemCounter++) {
					let itemObj = requestDetailsArray[itemCounter];
					itemsArray.push({
						item_id: itemObj.item_id,
						quantity: itemObj.item_quantity
					});
				}
				let requestObj = {
					request_id: employeeRequestObj.req_id,
					created_date: employeeRequestObj.created_date,
					item: itemsArray,
					emp_id: employeeRequestObj.emp_id,
					status: employeeRequestObj.status
				};
				detailsArray.push(requestObj);
			}

			res.setHeader("Content-Type", "application/json");
			let finalResultObj = { error: false, data: detailsArray, message: "stationery request list" };
			return res.json(finalResultObj);
		});
	});
});

router.get("/:id", function(req, res) {
	let request_id = req.params.id;
	dbConn.query("SELECT * FROM EMPLOYEE_REQUESTS WHERE req_id = " + request_id, function(
		employeeRequestError,
		employeeRequests,
		fields
	) {
		if (employeeRequestError) {
			return res.status(400).send(errorObj);
		}
		dbConn.query("SELECT * FROM REQUEST_DETAIL WHERE req_id = " + request_id, function(
			requestDetailError,
			requestDetails,
			fields
		) {
			if (requestDetailError) {
				return res.status(400).send(errorObj);
			}

			if (!employeeRequests.length) {
				return res.status(400).send({ error: true, message: "No request with the specified id" });
			}
			/**
			 * Form the stationery request object
			 */
			let itemsArray = [];
			for (let itemCounter = 0; itemCounter < requestDetails.length; itemCounter++) {
				let itemObj = requestDetails[itemCounter];
				itemsArray.push({
					item_id: itemObj.item_id,
					quantity: itemObj.item_quantity
				});
			}
			let requestObj = {
				request_id: employeeRequests[0].req_id,
				created_date: employeeRequests[0].created_date,
				item: itemsArray,
				emp_id: employeeRequests[0].emp_id,
				status: employeeRequests[0].status
			};
			res.setHeader("Content-Type", "application/json");
			let finalResultObj = { error: false, data: requestObj, message: "single stationery request" };
			return res.json(finalResultObj);
		});
	});
});

// Place a request
router.post("/", function(req, res) {
	let stationeryRequestObject = req.body.stationeryRequestObject;
	if (!stationeryRequestObject) {
		return res.status(400).send({ error: true, message: "Invalid stationery request" });
	}
	let createdDate = stationeryRequestObject.created_date;
	let convertedDateObj = new Date(createdDate).toISOString().slice(0, 19).replace("T", " ");
	let emp_id = stationeryRequestObject.emp_id;
	let status = stationeryRequestObject.status;
	let sign = "SIGN";
	let itemQuantityList = stationeryRequestObject.item;

	/**
	 * Inserting into employee request table
	 */
	let insertEmployeeRequest =
		"INSERT INTO EMPLOYEE_REQUESTS(created_date,emp_id,status,sign) VALUES('" +
		convertedDateObj +
		"'," +
		emp_id +
		",'" +
		status +
		"','" +
		sign +
		"');";
	dbConn.query(insertEmployeeRequest, function(employeeRequestError, employeeRequestResult, fields) {
		if (employeeRequestError) {
			return res.status(400).send(errorObj);
		}

		/**
		 * Inserting values into request detail table
		 */
		let employeeRequestId = employeeRequestResult.insertId;
		let itemCountArray = [];
		for (let itemCounter = 0; itemCounter < itemQuantityList.length; itemCounter++) {
			let itemObj = itemQuantityList[itemCounter];
			let itemCountList = "(" + employeeRequestId + "," + itemObj.item_id + "," + itemObj.quantity + ")";
			itemCountArray.push(itemCountList);
		}
		if (!itemCountArray.length) {
			return res.status(400).send({ error: true, message: "Invalid stationery request" });
		}
		let insertRequestDetail =
			"INSERT INTO REQUEST_DETAIL(req_id,item_id,item_quantity) VALUES" + itemCountArray.join(",") + ";";
		dbConn.query(insertRequestDetail, function(requestDetailError, requestDetailResult, fields) {
			if (requestDetailError) {
				return res.status(400).send(errorObj);
			}
			res.setHeader("Content-Type", "application/json");
			let finalResultObj = { error: false, message: "Stationery request placed successfully" };
			return res.json(finalResultObj);
		});
	});
});

module.exports = router;
