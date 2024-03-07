import Welcome from "../Sections/Welcome/Welcome";
import Footer from "../Sections/Footer/Footer";
import Header from "../Sections/Header/Header";
import { Path } from "./FeaturedVehiclesSection";
import { Link } from "react-router-dom";
import Offers from "../Sections/Offers/Offers";
import RevusWork from "../Sections/RevusWork/RevusWork";
import Sales from "../Sections/Sales/Sales";
import Reviews from "../Sections/Reviews/Reviews";
function About() {
	return (
		<>
			<Header />
			<Path>
				<h3>About</h3>
				<h6>
					<Link to={"/"} className="link-nav">
						Home
					</Link>{" "}
					/ About
				</h6>
			</Path>
			<Welcome />
			<Offers />
			<RevusWork />
			<Reviews />
			<Sales />
			<Footer />
		</>
	);
}

export default About;
