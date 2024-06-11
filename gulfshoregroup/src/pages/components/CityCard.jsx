import React from "react";

const CityCard = ({ city }) => {
	return (
		<div className="bg-white rounded-lg shadow-lg m-5 p-4">
			<img
				src={city.image}
				alt={city.name}
				className="w-full h-48 object-cover rounded-t-lg"
			/>
			<div className="p-4">
				<h3 className="text-xl font-bold mb-2">{city.name}</h3>
				<p className="text-gray-700 mb-4 h-48 text-ellipsis overflow-hidden">
					{city.description}
				</p>
				<a
					href={city.link}
					className="text-blue-600 hover:underline"
					target="_blank"
					rel="noopener noreferrer">
					Learn more
				</a>
			</div>
		</div>
	);
};

export default CityCard;
