import FeaturedVehicles from "./FeaturedVehicles/FeaturedVehicles";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Landing from "./Landing/Landing";
import Offers from "./Offers/Offers";
import Reviews from "./Reviews/Reviews";
import RevusWork from "./RevusWork/RevusWork";
import Sales from "./Sales/Sales";
import SellAndBuy from "./SellAndBuy/SellAndBuy";
import Welcome from "./Welcome/Welcome";

function Section() {
	return (
		<>
			<Header />
			<Landing />
			<Welcome />
			<FeaturedVehicles />
			<Offers />
			<SellAndBuy />
			<RevusWork />
			<Reviews />
			<Sales />
			<Footer />
		</>
	);
}

export default Section;
