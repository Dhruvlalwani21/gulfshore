// controllers/propertyController.js
const Property = require("./models/properties.model");

exports.getProperty = async (req, res) => {
	try {
		const property = await Property.findById(req.params.id);
		if (property) {
			res.status(200).json(property);
		}
	} catch (error) {
		res.status(404).json({ msg: "Not Found" });
	}
};

exports.getProperties = async (req, res) => {
	try {
		const {
			page = 1,
			limit = 10,
			sort = "CreatedDate",
			order = "desc",
			...filters
		} = req.query;

		const query = {};

		// Build filters dynamically
		for (const [key, value] of Object.entries(filters)) {
			query[key] = { $regex: value, $options: "i" };
		}

		const properties = await Property.find(query)
			.sort({ [sort]: order === "desc" ? -1 : 1 })
			.skip((page - 1) * limit)
			.limit(Number(limit));

		const count = await Property.countDocuments(query);

		res.json({
			total: count,
			page: Number(page),
			totalPages: Math.ceil(count / limit),
			data: properties,
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
