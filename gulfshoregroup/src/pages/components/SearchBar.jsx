import React from "react";

const Search = () => {
	return (
		<div
			className="container mx-auto my-10 p-6 bg-white rounded-lg "
			style={{
				boxShadow:
					"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
			}}>
			<h2 className="text-2xl font-bold text-gray-800 mb-4">
				Search for Properties
			</h2>
			<div className="flex flex-col md:flex-row md:space-x-4">
				<select className="mb-4 md:mb-0 px-4 py-2 rounded-lg w-full">
					<option value="">Any Location</option>
					<option value={"Altamonte Springs"}>
						"Altamonte Springs"
					</option>
					<option value={"Ave-Maria"}>"Ave Maria"</option>
					<option value={"Babcock-Ranch"}>"Babcock Ranch"</option>
					<option value={"Bonita-Springs"}>"Bonita Springs"</option>
					<option value={"Cape-Coral"}>"Cape Coral"</option>
					<option value={"Estero"}>"Estero"</option>
					<option value={"Fort-Myers"}>"Fort Myers"</option>
					<option value={"Immokalee"}> "Immokalee"</option>
					<option value={"Lehigh-Acres"}>"Lehigh Acres"</option>{" "}
					<option value={"Marco-Island"}>"Marco Island"</option>
					<option value={"Naples"}> "Naples"</option>
					<option value={"Pineland"}> "Pineland"</option>{" "}
				</select>
				<select className="mb-4 md:mb-0 px-4 py-2 rounded-lg w-full">
					<option value="">Any Price</option>
				</select>
				<select className="mb-4 md:mb-0 px-4 py-2 rounded-lg w-full">
					<option value="">Any Property Type</option>
				</select>

				<button className="bg-blue-600 text-white px-6 py-2 rounded-lg w-full md:w-auto">
					Search
				</button>
			</div>
		</div>
	);
};

export default Search;
