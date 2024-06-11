import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import CityCard from "./CityCard";
import fetchCityData from "../../api/wikiApi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cities = [
	"Altamonte Springs",
	"Bonita Springs",
	"Cape Coral",
	"Estero",
	"Fort Myers",
	"Immokalee",
	"Ave Maria, Florida",
	"Babcock Ranch",
	"Lehigh Acres",
	"Marco Island",
	"Naples",
	"Pineland, Florida",
];

const CitySlider = () => {
	const [cityData, setCityData] = useState([]);

	useEffect(() => {
		const getCityData = async () => {
			const dataPromises = cities.map((city) => fetchCityData(city));
			const data = await Promise.all(dataPromises);
			setCityData(data);
		};

		getCityData();
	}, []);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className="container mx-auto my-10 p-6">
			<h2 className="text-2xl font-bold text-center mb-8">
				Explore Florida's Cities
			</h2>
			<Slider {...settings}>
				{cityData.map((city, index) => (
					<CityCard key={index} city={city} />
				))}
			</Slider>
		</div>
	);
};

const SampleNextArrow = (props) => {
	const { className, style, onClick } = props;
	return (
		<div
			className={`${className} `}
			style={{
				...style,
				display: "block",
				borderRadius: "100%",
				background: "#004cff",
			}}
			onClick={onClick}
		/>
	);
};

const SamplePrevArrow = (props) => {
	const { className, style, onClick } = props;
	return (
		<div
			className={`${className}`}
			style={{
				...style,
				display: "block",

				borderRadius: "100%",
				background: "#004cff",
			}}
			onClick={onClick}
		/>
	);
};

export default CitySlider;
