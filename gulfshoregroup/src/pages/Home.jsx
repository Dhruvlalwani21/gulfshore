import React from "react";
import Hero from "./components/HeroSection";
import Search from "./components/SearchBar";
import CitySlider from "./components/CitiesSilder";
import Footer from "./components/Footer";

const Home = () => {
	return (
		<div>
			<Hero />
			<Search />
			<CitySlider />
			<Footer />
		</div>
	);
};

export default Home;
