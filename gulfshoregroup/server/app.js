const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const propertyRoutes = require("./routes/properties/properties.routes");
const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MySQL Connection
const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Florida_239",
	database: "dbs11591428",
});

// Connect to MongoDB
async function connectToMongo() {
	try {
		await mongoose.connect(
			"mongodb+srv://dimitrischwarz:9nRUmTwMIKUpFWSR@gulfshoregroup.wlnt7vj.mongodb.net/gulfshoregroup"
		);
		console.log("Connected to MongoDB.");
	} catch (error) {
		console.error("MongoDB connection error:", error);
	}
}

// Fetch data from MySQL and update MongoDB
async function fetchData() {
	db.connect((err) => {
		if (err) {
			throw err;
		}
		console.log("MySQL connected...");

		db.query("SELECT * FROM properties", async (err, rows) => {
			if (err) {
				console.error("MySQL query error:", err);
				return;
			}

			console.log("Data fetched from MySQL:", rows);

			const collection =
				mongoose.connection.db.collection("properties");

			try {
				for (let row of rows) {
					await collection.updateOne(
						{ matrix_unique_id: row.matrix_unique_id }, // Assuming 'matrix_unique_id' is a unique identifier in MySQL
						{ $set: row },
						{ upsert: true } // Create a new document if it doesn't exist
					);
				}
				console.log("Data updated in MongoDB.");
			} catch (error) {
				console.error("MongoDB update error:", error);
			} finally {
				db.end(() => {
					console.log("MySQL connection closed.");
				});
			}
		});
	});
}
// Routes
app.use("/api", propertyRoutes);

// Route to trigger data synchronization
app.get("/sync", async (req, res) => {
	await fetchData();
	res.send("Data synchronization initiated.");
});

// Start server
app.listen(port, async () => {
	await connectToMongo();
	console.log(`Server running on port ${port}`);
});
