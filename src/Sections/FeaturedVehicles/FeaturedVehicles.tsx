import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./FeaturedVehicles.css";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineSpeed } from "react-icons/md";
import { MdLocalGasStation } from "react-icons/md";
import MainTitle from "../../Components/MainTitle/MainTitle";
import { CarData } from "../../Data/CarData";
import { Link } from "react-router-dom";

function FeaturedVehicles() {
	const CarInformationArray = CarData.map((ele, index) => {
		return (
			<SplideSlide key={index}>
				<Link to={`/car-info/${ele.id}`} className="car-info-link">
					<Card data-price={ele.price}>
						<ImgGradient>
							<img src={ele.image} alt="" className="img-fluid image" />
						</ImgGradient>
						<h6 className="title">{ele.carName}</h6>
						<Info>
							<InfoBox>
								<CiCalendarDate />
								<span>{ele.model}</span>
							</InfoBox>
							<InfoBox>
								<MdOutlineSpeed />
								<span>{ele.maxSpeed}</span>
							</InfoBox>
							<InfoBox>
								<MdLocalGasStation />
								<span>{ele.type}</span>
							</InfoBox>
						</Info>
					</Card>
				</Link>
			</SplideSlide>
		);
	});

	const splideOptions = {
		type: "loop",
		perPage: 5,
		perMove: 1,
		pagination: true,
		breakpoints: {
			991: {
				perPage: 3,
			},
			767: {
				perPage: 2,
				arrows: false,
			},
			576: {
				perPage: 1,
				arrows: false,
			},
			1200: {
				perPage: 4,
			},
		},
		autoplay: {
			delay: 1000,
		},
	};
	return (
		<>
			<Featured>
				<Container>
					<MainTitle
						title="help us to find your car easily"
						textSpan="Vehicles"
						heading="Featured "
						className="featured-vehicles-title"
					/>
				</Container>
				<Splide options={splideOptions}>{CarInformationArray}</Splide>
			</Featured>
		</>
	);
}

const Featured = styled.div`
	padding-bottom: 100px;
	background-color: var(--second-color);
	position: relative;
	.car-info-link {
		text-decoration: none;
	}
`;
const Container = styled.div.attrs(() => ({
	className: "container",
}))``;

// export { Container };
export const Card = styled.div`
	cursor: pointer;
	background-color: #fff;
	margin-left: 10px;

	position: relative;
	transition: var(--main-transition);
	width: 90%;
	@media (max-width: 767px) {
		width: 90%;
		margin: 0 auto;
		.info {
			justify-content: center;
			gap: 40px;
		}
		img {
			width: 100%;
		}
	}

	&:hover {
		background-color: var(--red-color);
		.info-box,
		.title {
			color: #fff;
		}
		.overlay::before {
			background-color: #323e4bc4;
		}
		&::after {
			opacity: 1;
		}
	}
	&::after {
		position: absolute;
		content: attr(data-price) "$";
		background-color: var(--red-color);
		top: 0;
		color: #fff;
		margin: 20px;
		padding: 10px;
		z-index: 10;
		transition: 0.4s;
		opacity: 0;
		font-weight: bold;
	}
	h6 {
		border-bottom: 1px solid #dddddd;
		text-align: center;
		font-weight: 700 !important;
		color: var(--second-color);
		padding: 15px 0;
		text-transform: uppercase;
	}
`;

export const Info = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 12px 15px;
	transition: var(--main-transition);
`;

export const InfoBox = styled.div.attrs(() => ({
	className: "info-box",
}))`
	transition: var(--main-transition);
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 3px;
	color: #666;
	font-size: 14px;
	.info-box:nth-child(2) {
		border-left: 1px solid #dddddd;
		border-right: 1px solid #dddddd;
		padding: 0 5px;
	}
`;

export const ImgGradient = styled.div.attrs(() => ({
	className: "overlay",
}))`
	position: relative;

	&::before {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 5;
		transition: var(--main-transition);
	}
`;

export default FeaturedVehicles;
