import React, { useState } from "react";

const Modal = ({ isOpen, onClose }) => {
	const [isSignIn, setIsSignIn] = useState(true);

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
			<div className="bg-white p-6 rounded-lg shadow-lg w-96">
				<h2 className="text-2xl font-bold mb-4">
					{isSignIn ? "Sign In" : "Create Account"}
				</h2>
				<form>
					<div className="mb-4">
						<label className="block text-gray-700">Email</label>
						<input
							type="email"
							className="w-full px-4 py-2 border rounded-lg"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700">Password</label>
						<input
							type="password"
							className="w-full px-4 py-2 border rounded-lg"
						/>
					</div>
					{!isSignIn && (
						<div className="mb-4">
							<label className="block text-gray-700">
								Confirm Password
							</label>
							<input
								type="password"
								className="w-full px-4 py-2 border rounded-lg"
							/>
						</div>
					)}
					<button
						type="submit"
						className="w-full bg-blue-600 text-white py-2 rounded-lg">
						{isSignIn ? "Sign In" : "Sign Up"}
					</button>
				</form>
				<button
					onClick={onClose}
					className="mt-4 w-full bg-gray-600 text-white py-2 rounded-lg">
					Close
				</button>
				<p className="mt-4 text-center text-gray-700">
					{isSignIn
						? "Don't have an account?"
						: "Already have an account?"}{" "}
					<span
						className="text-blue-600 cursor-pointer"
						onClick={() => setIsSignIn(!isSignIn)}>
						{isSignIn ? "Create Account" : "Sign In"}
					</span>
				</p>
			</div>
		</div>
	);
};

export default Modal;
