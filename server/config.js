let config = {
	databaseDetail: {
		host: "localhost",
		user: "root",
		password: "",
		database: "STATIONERY_MANAGEMENT"
	},
	PORT: 8000
};

const errorObj = { error: true, message: "Some Error Occured" };

module.exports = { config, errorObj };
