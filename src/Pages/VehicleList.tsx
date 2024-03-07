import {
	Card,
	ImgGradient,
	Info,
	InfoBox,
} from "../Sections/FeaturedVehicles/FeaturedVehicles";
import Footer from "../Sections/Footer/Footer";
import { Container } from "../Components/GlobalComponents";
import Header from "../Sections/Header/Header";
import { Path } from "./FeaturedVehiclesSection";
import { Link } from "react-router-dom";
import { Row } from "../Components/GlobalComponents";
import { Col } from "../Components/GlobalComponents";
import { CustomUseParams } from "../Components/CustomParams/Params";
import { useCarContext } from "../Components/CustomContext/Context";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineSpeed, MdLocalGasStation } from "react-icons/md";
import { CarData } from "../Data/CarData";
import styled from "styled-components";
import { FinancingCalc } from "./CarInfo";
import { Info as LandingInfo } from "../Sections/Landing/Landing";

function VehicleList() {
	const { carName } = CustomUseParams();
	const carTypes = ["Mercedes", "Bmw", "Lamborghini", "Ford", "Ferrari"];
	const selectedCarsData = useCarContext().find(
		ele => ele.Make.toLowerCase() === carName?.toLowerCase()
	);
	if (selectedCarsData === undefined) {
		throw new Error("selectedCarsData UNDEFINED");
	}

	const carCard = CarData.filter(
		ele => ele.carName.split(" ")[0] === selectedCarsData.Make
	).map((ele, index) => {
		{
			return (
				<Col className="col-lg-6 col-md-6" key={index}>
					<Link
						to={`/car-info/${ele.id}`}
						className="car-info-link"
						style={{ textDecoration: "none" }}
					>
						<CustomCard data-price={ele.price}>
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
						</CustomCard>
					</Link>
				</Col>
			);
		}
	});

	return (
		<>
			<Header />
			<Path>
				<h3>Vehicle List</h3>
				<h6>
					<Link to={"/"} className="link-nav">
						Home
					</Link>{" "}
					/ Vehicle List
				</h6>
			</Path>
			<Container>
				<Row>
					<Col className="col-lg-4">
						<SearchCarType>
							<h4>SEARCH A CAR</h4>
							<CustomVehicles>
								<ul className="car-nav">
									{carTypes.map(carType => (
										<Link
											key={carType}
											to={`/carlist/${carType}`}
											className={`car-link ${
												carName === carType ? "active" : ""
											}`}
										>
											{carType}
										</Link>
									))}
								</ul>
							</CustomVehicles>
						</SearchCarType>
					</Col>
					<Col className="col-lg-8">
						<Row>{carCard}</Row>
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	);
}
const CustomCard = styled(Card)`
	margin-bottom: 50px;
`;

const SearchCarType = styled(FinancingCalc)`
	h4 {
		font-size: 16px;
	}
`;
const CustomVehicles = styled(LandingInfo)`
	ul {
		display: flex;
		flex-direction: column;
		padding: 12px 12px 0 !important;
	}
	.car-link {
		text-decoration: none;
		color: #333333;
		background-color: #fff;
		margin-bottom: 20px;
		padding: 7px;
		text-align: center;
		border-radius: 4px;
		text-transform: uppercase;
		transition: var(--main-transition);
	}
	.car-link.active,
	.car-link:hover {
		background-color: var(--red-color);
		color: #fff;
	}
`;
export default VehicleList;
