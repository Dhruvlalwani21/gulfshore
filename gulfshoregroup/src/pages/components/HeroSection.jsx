import React from "react";

const Hero = () => {
	return (
		<div
			className="bg-cover bg-center h-screen"
			style={{
				backgroundImage: "url('/imgs/florida-2.jpg')",
			}}>
			<div className="bg-gray-900 bg-opacity-50 h-full flex flex-col items-center justify-center text-white">
				<h1 className="text-4xl md:text-6xl font-bold mb-4">
					Find Your Dream Home
				</h1>
				<p className="text-lg md:text-2xl mb-8">
					Explore from Apartments, Land, Builder Floors, and more
				</p>
				<input
					type="text"
					placeholder="Search for homes..."
					className="px-4 py-2 rounded-lg w-3/4 md:w-1/2 text-black"
				/>
			</div>
		</div>
	);
};

export default Hero;
