import styled from "styled-components";
import Header from "../Sections/Header/Header";
import PathPhoto from "../Assets/imgs/page-heading-image.jpg";
import { Link } from "react-router-dom";
import FeaturedVehicles from "../Sections/FeaturedVehicles/FeaturedVehicles";
import { Container } from "../Components/GlobalComponents";
import Footer from "../Sections/Footer/Footer";
import { Row } from "../Components/GlobalComponents";
import Sales from "../Sections/Sales/Sales";
import { Col } from "../Components/GlobalComponents";
import FeaturedSectionData, { IconsArray } from "../Data/FeaturedSectionData";

function FeaturedVehiclesSection() {
	const FeaturedArray = FeaturedSectionData.map((ele, index) => {
		return (
			<Col className="col-lg-4 col-md-6">
				<Box>
					{IconsArray[index]}
					<h3>{ele.heading}</h3>
					<p>{ele.paragh}</p>
				</Box>
			</Col>
		);
	});

	return (
		<>
			<Header />
			<Path>
				<h3>Featured Vehicles</h3>
				<h6>
					<Link to={"/"} className="link-nav">
						Home
					</Link>{" "}
					/ Featured Vehicles
				</h6>
			</Path>
			<Container>
				<Row>{FeaturedArray}</Row>
			</Container>
			<FeaturedVehicles />
			<Sales />
			<Footer />
		</>
	);
}

const Path = styled.div`
	background-image: url(${PathPhoto});
	background-repeat: no-repeat;
	padding: 100px 0;
	margin-bottom: 100px;
	letter-spacing: 3px;
	h3 {
		color: #fff;
		text-align: center;
		font-weight: bold;
		text-transform: capitalize;
		font-size: 40px;
	}
	h6 {
		color: #fff;
		text-align: center;
		text-transform: capitalize;
	}
	.link-nav {
		color: #fff;
		text-align: center;
		text-transform: capitalize;
		text-decoration: none;
		transition: var(--main-transition);
		&:hover {
			color: var(--red-color);
		}
	}
`;

const Box = styled.div`
	box-shadow: 0 0 12px 8px rgba(129, 129, 129, 0.06);
	background-color: #fff;
	padding: 40px;
	margin-bottom: 100px;
	position: relative;
	&::before {
		content: "";
		position: absolute;
		border: 10px solid;
		border-color: var(--red-color) transparent transparent transparent;
		bottom: 0;
		right: 0px;
		transform: rotate(-45deg);
	}
	text-align: center;
	.about-icon {
		font-size: 35px;
		margin-bottom: 10px;
		color: var(--second-color);
	}
	h3 {
		font-size: 20px;
		margin-top: 15px;
		font-weight: bold;
		text-transform: capitalize;
		margin-bottom: 20px;
	}
	P {
		color: #333333;
	}
`;
export { Path };
export default FeaturedVehiclesSection;
