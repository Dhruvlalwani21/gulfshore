import React from "react";

const Footer = () => {
	return (
		<footer className="bg-gray-800 py-6">
			<div className="container mx-auto text-center text-white">
				<p className="mb-4">
					&copy; 2024 Gulfshoregroup.com - All rights reserved.
				</p>
				<div className="flex justify-center space-x-4">
					<a href="#" className="text-gray-400 hover:text-white">
						Privacy
					</a>
					<a href="#" className="text-gray-400 hover:text-white">
						Terms
					</a>
					<a href="#" className="text-gray-400 hover:text-white">
						Contact Us
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
