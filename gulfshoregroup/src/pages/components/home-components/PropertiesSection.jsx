import axios from "axios";
import React, { useEffect, useState } from "react";
import { PropertyCard2 } from "../PropertyCard";

function PropertiesSection() {
	const [properties, setProperties] = useState([]);
	const [total, setTotal] = useState(0);
	const [searchParams, setSearchParams] = useState({
		City: "",
		BathsFull: "",
		Bedrooms: "",
		sort: "CreatedDate",
		order: "desc",
		page: 1,
		limit: 10,
	});

	useEffect(() => {
		fetchProperties(searchParams);
	}, [searchParams]);

	const fetchProperties = async (params) => {
		try {
			const response = await axios.get(
				`${process.env.REACT_APP_SERVER}api/properties`,
				{ params }
			);
			setProperties(response.data.data);
			setTotal(response.data.total);
		} catch (error) {
			console.error("Error fetching properties:", error);
		}
	};

	const handleSearch = (params) => {
		setSearchParams({ ...searchParams, ...params, page: 1 });
	};

	const handlePageChange = (page) => {
		setSearchParams({ ...searchParams, page });
	};

	return (
		<div>
			<h2 className="text-2xl font-bold text-center mb-8">
				Featured Properties
			</h2>
			<div className="flex flex-wrap justify-center">
				{properties.map((data, i) => {
					return <PropertyCard2 key={i} property={data} />;
				})}
			</div>
			<div className="flex my-6 justify-center">
				<button
					type="button"
					class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
					View More
				</button>
			</div>
		</div>
	);
}

export default PropertiesSection;
