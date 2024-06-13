// src/components/PropertyDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import "./css/PropertyDetail.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MarkerItem from "./components/map/Marker";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const PropertyDetail = () => {
	const { id } = useParams();
	const [property, setProperty] = useState(null);

	useEffect(() => {
		const fetchProperty = async () => {
			try {
				const response = await axios.get(
					`${process.env.REACT_APP_SERVER}api/property/${id}`
				);
				setProperty(response.data);
			} catch (error) {}
		};

		fetchProperty();
	}, [id]);
	const { isLoaded } = useJsApiLoader({
		id: "google-map",
		googleMapsApiKey: "AIzaSyBQwpzlVeV9AI6FETYYUmLt730XEKRdfAY",
	});
	const mapContainerStyle = {
		height: "50vh",
	};

	if (!property) return <div>Loading...</div>;

	return (
		<>
			<Navbar />
			<div className="container mx-auto p-4">
				<div className="flex flex-col md:flex-row">
					<div className="w-full md:w-1/2 p-4">
						<img
							src={process.env.REACT_APP_IMGURL + property.DefaultPic}
							alt="Property"
							className="w-full h-auto rounded-lg"
						/>
					</div>
					<div className="w-full md:w-1/2 p-4">
						<h1 className="text-3xl font-bold mb-4">
							{property.PropertyAddress}
						</h1>
						<p className="text-lg mb-2">
							<strong>City:</strong> {property.City}
						</p>
						<p className="text-lg mb-2">
							<strong>Full Baths:</strong> {property.BathsFull}
						</p>
						<p className="text-lg mb-2">
							<strong>Bedrooms:</strong> {property.Bedrooms}
						</p>
						<p className="text-lg mb-2 font-semibold">
							<strong>Price</strong> : ${property.CurrentPrice}
						</p>
						<p className="text-lg mb-2">
							<strong>Building Description:</strong>{" "}
							{property.BuildingDesc}
						</p>
						<p className="text-lg mb-2">
							<strong>Cooling:</strong> {property.Cooling}
						</p>
						<p className="text-lg mb-2">
							<strong>Exterior Features:</strong>{" "}
							{property.ExteriorFeatures}
						</p>
						<p className="text-lg mb-2">
							<strong>Flooring:</strong> {property.Flooring}
						</p>
						<p className="text-lg mb-2">
							<strong>Year Built:</strong> {property.YearBuilt}
						</p>
						<p className="text-lg mb-2">
							<strong>Garage Description:</strong>{" "}
							{property.GarageDesc}
						</p>
					</div>
				</div>
				<div className="mt-8">
					<h2 className="text-2xl font-bold mb-4">
						Property Details
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<p className="text-lg">
							<strong>Parcel Number:</strong> {property.ParcelNumber}
						</p>
						<p className="text-lg">
							<strong>Lot Size:</strong> {property.Acres} acres
						</p>
						<p className="text-lg">
							<strong>Community Type:</strong>{" "}
							{property.CommunityType}
						</p>
						<p className="text-lg">
							<strong>County:</strong> {property.CountyOrParish}
						</p>
						<p className="text-lg">
							<strong>Construction:</strong> {property.Construction}
						</p>
						<p className="text-lg">
							<strong>Heating:</strong> {property.Heat}
						</p>
						<p className="text-lg">
							<strong>Foreclosed:</strong>{" "}
							{property.ForeclosedREOYN ? "Yes" : "No"}
						</p>
						<p className="text-lg">
							<strong>Garage Spaces:</strong> {property.GarageSpaces}
						</p>
						<p className="text-lg">
							<strong>Furnished:</strong> {property.FurnishedDesc}
						</p>
						<p className="text-lg">
							<strong>Pets Allowed:</strong> {property.Pets}
						</p>
						<p className="text-lg">
							<strong>Status:</strong> {property.Status}
						</p>
					</div>

					<div className="w-screen p-4 md:w-screen lg:w-3/4">
						<h2 className="text-2xl font-bold text-center mb-8">
							Map Location
						</h2>
						{isLoaded ? (
							<GoogleMap
								mapContainerStyle={mapContainerStyle}
								zoom={8}
								center={{
									lat: parseFloat(property.Latitude),
									lng: parseFloat(property.Longitude),
								}}>
								<MarkerItem item={property} />
							</GoogleMap>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default PropertyDetail;
