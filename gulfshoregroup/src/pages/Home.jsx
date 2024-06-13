import React from "react";
import Hero from "./components/home-components/HeroSection";
import Search from "./components/SearchBar";
import CitySlider from "./components/CitiesSilder";
import Footer from "./components/Footer";
import PropertiesSection from "./components/home-components/PropertiesSection";
import Navbar from "./components/Navbar";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<Search />
			<CitySlider />
			<PropertiesSection />
			<Footer />
		</div>
	);
};

export default Home;
