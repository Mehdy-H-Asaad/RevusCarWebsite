import FeaturedVehicles from "../Sections/FeaturedVehicles/FeaturedVehicles";
import Footer from "../Sections/Footer/Footer";
import Header from "../Sections/Header/Header";
import Landing from "../Sections/Landing/Landing";
import Offers from "../Sections/Offers/Offers";
import Reviews from "../Sections/Reviews/Reviews";
import RevusWork from "../Sections/RevusWork/RevusWork";
import Sales from "../Sections/Sales/Sales";
import SellAndBuy from "../Sections/SellAndBuy/SellAndBuy";
import Welcome from "../Sections/Welcome/Welcome";

function Home() {
	return (
		<>
			<Header />
			<Landing />
			<Welcome />
			<FeaturedVehicles />
			<Offers />
			<RevusWork />
			<SellAndBuy />
			<Reviews />
			<Sales />
			<Footer />
		</>
	);
}

export default Home;
