import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Navbar = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<nav className="bg-white shadow-md">
			<div className="container mx-auto px-6 py-3 flex justify-between items-center">
				<Link to="/" className="text-2xl font-bold text-gray-800">
					Gulfshore Group
				</Link>
				<div className="hidden md:flex space-x-4">
					<Link
						to="/buy"
						className="text-gray-800 hover:text-gray-600">
						Buy
					</Link>
					<Link
						to="/sell"
						className="text-gray-800 hover:text-gray-600">
						Sell
					</Link>
					<Link
						to="/map-search"
						className="text-gray-800 hover:text-gray-600">
						Map Search
					</Link>
					<Link
						to="/cities"
						className="text-gray-800 hover:text-gray-600">
						Cities
					</Link>
					<Link
						to="/about-us"
						className="text-gray-800 hover:text-gray-600">
						About-us
					</Link>
					<button
						onClick={() => setIsModalOpen(true)}
						className="text-gray-800 hover:text-gray-600">
						Sign In
					</button>
				</div>
			</div>
			<Modal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</nav>
	);
};

export default Navbar;
