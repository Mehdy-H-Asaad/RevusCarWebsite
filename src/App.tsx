import { HashRouter, Route, Routes } from "react-router-dom";
import About from "../src/Pages/About";
import Home from "../src/Pages/Home";
import FeaturedVehiclesSection from "../src/Pages/FeaturedVehiclesSection";
import ReviewsSection from "../src/Pages/ReviewsSection";
import Contact from "../src/Pages/Contact";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CarInfo from "../src/Pages/CarInfo";
import { carDataSection } from "../src/Data/CarData";
import { CarContext } from "./Components/CustomContext/Context";
import VehicleList from "../src/Pages/VehicleList";
function App() {
	const ScrollToTop = () => {
		const { pathname } = useLocation();

		useEffect(() => {
			ScrollToTop;
		}, [pathname]);

		return null;
	};

	return (
		<HashRouter>
			<ScrollToTop />
			<CarContext.Provider value={carDataSection}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/featured-cars" element={<FeaturedVehiclesSection />} />
					<Route path="/about" element={<About />} />
					<Route path="/reviews" element={<ReviewsSection />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/car-info/:carId" element={<CarInfo />} />
					<Route path="/carlist/:carName" element={<VehicleList />} />
				</Routes>
			</CarContext.Provider>
		</HashRouter>
	);
}

export default App;
