import { Link } from "react-router-dom";
import Reviews from "../Sections/Reviews/Reviews";
import { Path } from "./FeaturedVehiclesSection";
import Sales from "../Sections/Sales/Sales";
import Header from "../Sections/Header/Header";
import Footer from "../Sections/Footer/Footer";
import { Container } from "../Components/GlobalComponents";
import { Row } from "../Components/GlobalComponents";
import { Col } from "../Components/GlobalComponents";
import styled from "styled-components";
import ReviesSectionData from "../Data/ReviewsSectonData";
function ReviewsSection() {
	const ReviewsArray = ReviesSectionData.map((ele, index) => {
		return (
			<Col className="col-lg-3 col-md-4 col-sm-6" key={index}>
				<Box>
					<h3>{ele.name}</h3>
					<span>{ele.count}</span>
				</Box>
			</Col>
		);
	});
	return (
		<>
			<Header />
			<Path>
				<h3>Reviews</h3>
				<h6>
					<Link to={"/"} className="link-nav">
						Home
					</Link>{" "}
					/ Reviews
				</h6>
			</Path>
			<Container>
				<Row>{ReviewsArray}</Row>
			</Container>
			<Reviews />
			<Sales />
			<Footer />
		</>
	);
}
const Box = styled.div`
	background-color: #f1f5fa;
	padding: 30px;
	text-align: center;
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
	h3 {
		color: var(--second-color);
		font-weight: bold;
		font-size: 20px;
		min-width: 163px;
		text-transform: uppercase;
	}
	span {
		font-size: 24px;
		font-weight: bold;
	}
`;
export default ReviewsSection;
