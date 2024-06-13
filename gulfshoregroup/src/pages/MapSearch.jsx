//AIzaSyBQwpzlVeV9AI6FETYYUmLt730XEKRdfAY
// MapSearchPage.js
import React, { useEffect, useState } from "react";
import {
	GoogleMap,
	useJsApiLoader,
	LoadScript,
	Marker,
} from "@react-google-maps/api";

import PropertyCard from "./components/PropertyCard";
import properties from "../data/properties.json";
import MarkerItem from "./components/map/Marker";
import axios from "axios";
import Pagination from "./components/search/Pagination";
import Navbar from "./components/Navbar";
import Search from "./components/SearchBar";
import Footer from "./components/Footer";

const mapContainerStyle = {
	height: "100vh",
};

const cardContainerStyle = {
	height: "100vh",
};

const center = {
	lat: 27.9944024,
	lng: -81.7602544,
};

function MapSearchPage() {
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

	const [selectedProperty, setSelectedProperty] = useState(null);
	const { isLoaded } = useJsApiLoader({
		id: "google-map",
		googleMapsApiKey: "AIzaSyBQwpzlVeV9AI6FETYYUmLt730XEKRdfAY",
	});
	const handleMarkerClick = (property) => {
		if (selectedProperty === property) {
			setSelectedProperty(null);
		} else {
			setSelectedProperty(property);
		}
	};

	return (
		<div className="h-screen ">
			<Navbar />
			<div className="container p-3 mr-3 rounded-lg ">
				<h2 className="text-2xl font-bold text-gray-800 mb-4">
					Search for Properties Showing 10 of {total}
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
						<option value={"Lehigh-Acres"}>
							"Lehigh Acres"
						</option>{" "}
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
			<div className="flex w-screen overflow-y-scroll">
				<div className="w-screen md:w-screen lg:w-3/4">
					{isLoaded ? (
						<GoogleMap
							mapContainerStyle={mapContainerStyle}
							zoom={8}
							center={center}>
							{properties.map((property) => (
								<MarkerItem
									item={property}
									handleMarkerClick={(i) => handleMarkerClick(i)}
								/>
							))}
						</GoogleMap>
					) : (
						<></>
					)}
				</div>
				<div
					className=" hidden h-0 md:h-0 lg:h-full lg:w-1/4 lg:block overflow-scroll"
					style={cardContainerStyle}>
					{selectedProperty && (
						<PropertyCard property={selectedProperty} />
					)}
					{properties.map((data, i) => {
						return <PropertyCard property={data} />;
					})}
					{/* <Pagination
					total={total}
					page={searchParams.page}
					limit={searchParams.limit}
					onPageChange={handlePageChange}
				/> */}
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default MapSearchPage;
