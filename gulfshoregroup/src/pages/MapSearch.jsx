//AIzaSyBQwpzlVeV9AI6FETYYUmLt730XEKRdfAY
// MapSearchPage.js
import React, { useState } from "react";
import {
	GoogleMap,
	useJsApiLoader,
	LoadScript,
	Marker,
} from "@react-google-maps/api";
import PropertyCard from "./components/PropertyCard";
import properties from "../data/properties.json";
import MarkerItem from "./components/map/Marker";

const mapContainerStyle = {
	height: "90vh",
};

const cardContainerStyle = {
	overflowY: "scroll",
};

const center = {
	lat: 27.9944024,
	lng: -81.7602544,
};

function MapSearchPage() {
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
		<div className="flex fixed w-screen">
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
				className=" hidden h-0 md:h-0 lg:h-full lg:w-1/4 lg:block"
				style={cardContainerStyle}>
				{selectedProperty && (
					<PropertyCard property={selectedProperty} />
				)}
			</div>
		</div>
	);
}

export default MapSearchPage;
