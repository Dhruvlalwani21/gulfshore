import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PropertyCard = ({ property }) => {
	return (
		<Link to={`/property-details/pid/${property._id}`}>
			<div className="bg-white rounded-lg shadow-lg p-4 mb-4 m-2 min-w-72">
				<img
					src={process.env.REACT_APP_IMGURL + property.DefaultPic}
					alt={property.address}
					className="w-full h-48 object-cover rounded-t-lg"
				/>
				<div className="p-4">
					<h3 className="text-xl font-bold mb-2">
						{property.PropertyAddress}
					</h3>
					<p className="text-gray-700 mb-2">{property.City}</p>
					<p className="text-gray-700 mb-2">
						Price: $ {property.CurrentPrice}
					</p>
					<div className="flex flex-wrap">
						<span className="m-1">
							<strong>Full Baths:</strong> {property?.BathsFull}
						</span>
						<span className="m-1">
							<strong>Bedrooms:</strong> {property?.Bedrooms}
						</span>
						<span className="m-1">
							{" "}
							<strong>Year Built:</strong> {property?.YearBuilt}
						</span>
					</div>
				</div>
			</div>
		</Link>
	);
};

export const PropertyCard2 = ({ property }) => {
	return (
		<Link to={`/property-details/pid/${property._id}`}>
			<div className="bg-white rounded-lg shadow-lg p-4 mb-4 m-2 w-full sm:w-screen lg:max-w-80 md:max-w-72">
				<img
					src={process.env.REACT_APP_IMGURL + property.DefaultPic}
					alt={property.address}
					className="w-full h-48 object-cover rounded-t-lg"
				/>
				<div className="p-4">
					<h3 className="text-xl font-bold mb-2">
						{property.PropertyAddress}
					</h3>
					<p className="text-gray-700 mb-2">{property.City}</p>
					<p className="text-gray-700 mb-2">
						Price: $ {property.CurrentPrice}
					</p>
					<div className="flex flex-wrap">
						<span className="m-1">
							<strong>Full Baths:</strong> {property?.BathsFull}
						</span>
						<span className="m-1">
							<strong>Bedrooms:</strong> {property?.Bedrooms}
						</span>
						<span className="m-1">
							{" "}
							<strong>Year Built:</strong> {property?.YearBuilt}
						</span>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default PropertyCard;
