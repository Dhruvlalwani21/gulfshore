// routes/propertyRoutes.js
const express = require("express");
const router = express.Router();
const {
	getProperties,
	getProperty,
} = require("./properties.controller");

router.get("/properties", getProperties);
router.get("/property/:id", getProperty);

module.exports = router;
