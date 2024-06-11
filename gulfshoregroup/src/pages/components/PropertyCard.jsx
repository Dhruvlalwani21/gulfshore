import React from "react";

const PropertyCard = ({ property }) => {
	return (
		<div className="bg-white rounded-lg shadow-lg p-4 mb-4 m-2 min-w-72">
			<img
				src={property.image}
				alt={property.address}
				className="w-full h-48 object-cover rounded-t-lg"
			/>
			<div className="p-4">
				<h3 className="text-xl font-bold mb-2">{property.address}</h3>
				<p className="text-gray-700 mb-2">{property.price}</p>
				<p className="text-gray-700 mb-2">
					{property.bedrooms} bedrooms, {property.bathrooms} bathrooms
				</p>
				<p className="text-gray-700 mb-2">{property.sqft} sqft</p>
			</div>
		</div>
	);
};

export default PropertyCard;
