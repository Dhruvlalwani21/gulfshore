import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";
import Navbar from "./pages/components/Navbar";
import Footer from "./pages/components/Footer";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import MapSearchPage from "./pages/MapSearch";
// import Rent from './pages/Rent';
// import Sell from './pages/Sell';
// import Mortgage from './pages/Mortgage';
// import FindAgents from './pages/FindAgents';

const App = () => {
	return (
		<Router>
			<div>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cities" element={<Cities />} />
					<Route path="/map-search" element={<MapSearchPage />} />
					{/* <Route path="/buy" element={<Buy />} />
					<Route path="/rent" element={<Rent />} />
					<Route path="/sell" element={<Sell />} />
					<Route path="/mortgage" element={<Mortgage />} />
					<Route path="/find-agents" element={<FindAgents />} /> */}
				</Routes>
			</div>
		</Router>
	);
};

export default App;
