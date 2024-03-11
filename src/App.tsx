import { useEffect, Suspense, lazy } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { CarContext } from "./Components/CustomContext/Context";

// CODE SPLITTING IMPLEMENTATION
const Home = lazy(() => import("../src/Pages/Home"));
const FeaturedVehiclesSection = lazy(
	() => import("../src/Pages/FeaturedVehiclesSection")
);
const About = lazy(() => import("../src/Pages/About"));
const ReviewsSection = lazy(() => import("../src/Pages/ReviewsSection"));
const Contact = lazy(() => import("../src/Pages/Contact"));
const CarInfo = lazy(() => import("../src/Pages/CarInfo"));
const VehicleList = lazy(() => import("../src/Pages/VehicleList"));
import { carDataSection } from "../src/Data/CarData";
import { LoaderBar } from "./Components/GlobalComponents";

function App() {
	const ScrollToTop = () => {
		const { pathname } = useLocation();

		useEffect(() => {
			window.scrollTo(0, 0);
		}, [pathname]);

		return null;
	};

	return (
		<HashRouter>
			<ScrollToTop />
			<CarContext.Provider value={carDataSection}>
				<Suspense
					fallback={
						<div
							style={{ display: "grid", placeItems: "center", height: "100vh" }}
						>
							<LoaderBar></LoaderBar>
						</div>
					}
				>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/featured-cars"
							element={<FeaturedVehiclesSection />}
						/>
						<Route path="/about" element={<About />} />
						<Route path="/reviews" element={<ReviewsSection />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/car-info/:carId" element={<CarInfo />} />
						<Route path="/carlist/:carName" element={<VehicleList />} />
					</Routes>
				</Suspense>
			</CarContext.Provider>
		</HashRouter>
	);
}

export default App;
