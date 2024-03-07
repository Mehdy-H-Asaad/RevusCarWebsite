import { useState, useEffect } from "react";
import { Row } from "../../Components/GlobalComponents";
import styled from "styled-components";
import { Container } from "../../Components/GlobalComponents";
import { Link } from "react-router-dom";
import LandingImg from "/src/Assets/imgs/layout-mclaren.jpg";

interface CommonProps {
	children?: React.ReactNode;
}
interface InfoProps extends CommonProps {}
interface BoxProps extends CommonProps {}
interface ColProps extends CommonProps {}

function Landing() {
	const [toggle, setToggle] = useState(false);
	const [cars, setCars] = useState("Mercedes");

	const showDrop = () => {
		setToggle(!toggle);
	};
	const closeDrop = (event: MouseEvent) => {
		const target = event.target as HTMLElement;
		if (toggle && !target.closest(".car-model")) {
			setToggle(false);
		}
	};

	const handleCheck = (car: string) => {
		setCars(car.charAt(0).toUpperCase() + car.slice(1).toLowerCase());

		setToggle(false);
	};

	useEffect(() => {
		document.addEventListener("click", closeDrop);

		return () => {
			document.removeEventListener("click", closeDrop);
		};
	}, [toggle]);

	return (
		<>
			<LandingSection>
				<Container>
					<Text>
						<span>EXPERT AUTO SERVICES</span>
						<h3>Premium Cars Dealers</h3>
					</Text>
					<Box>
						<Row>
							<Col className="col-lg-3">
								<Info>
									<label>select your car</label>
									<CarModelUl>
										<li onClick={showDrop}>
											{cars == "" ? "Mercedes" : cars}
											<i
												className={`fa-solid fa-angle${
													toggle ? "-up" : "-down"
												}`}
											></i>
										</li>
										{toggle && (
											<li>
												<DropDownMenu>
													<li
														onClick={() => {
															handleCheck("Mercedes");
														}}
													>
														Mercedes
													</li>
													<li
														onClick={() => {
															handleCheck("BMW");
														}}
													>
														BMW
													</li>
													<li
														onClick={() => {
															handleCheck("lamborghini");
														}}
													>
														Lamborghini
													</li>
													<li
														onClick={() => {
															handleCheck("ford");
														}}
													>
														Ford
													</li>
													<li
														onClick={() => {
															handleCheck("ferrari");
														}}
													>
														ferrari
													</li>
												</DropDownMenu>
											</li>
										)}
									</CarModelUl>
								</Info>
							</Col>
							<Col className="col-lg-3">
								<Info>
									<label>pick-up date</label>
									<CarModelUl>
										<li>
											<Date />
										</li>
									</CarModelUl>
								</Info>
							</Col>
							<Col className="col-lg-3">
								<Info>
									<label>drop-of date</label>
									<CarModelUl>
										<li>
											<Date />
										</li>
									</CarModelUl>
								</Info>
							</Col>
							<Col className="search-box col-lg-3">
								<SearchButton to={`carlist/${cars}`}>Search</SearchButton>
							</Col>
						</Row>
					</Box>
				</Container>
			</LandingSection>
		</>
	);
}

const LandingSection = styled.div`
	background-image: url(${LandingImg}),
		linear-gradient(0deg, rgba(41, 45, 69, 0.8), rgba(12, 12, 15, 0.6));
	background-position: center;
	background-repeat: no-repeat;
	height: calc(100vh - 87px);
	position: relative;
	z-index: 0;
	display: flex;
	align-items: flex-end;
	margin-bottom: 200px;
	&::after {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: #161d24;
		z-index: -1;
		opacity: 0.6;
	}
	&::before {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #25324199;
	}
	@media (max-width: 991px) {
		margin-bottom: 660px;
	}
`;
// col-lg-3
const Col = styled.div.attrs<ColProps>(props => ({
	className: props.className,
}))`
	&.search-box {
		display: flex;
	}
`;
// export { Col };
const SearchButton = styled(Link)`
	background-color: var(--red-color);
	cursor: pointer;
	text-transform: uppercase;
	color: #fff;
	align-self: flex-end;
	padding: 12px;
	width: 100%;
	text-align: center;
	transition: var(--main-transition);
	text-decoration: none;
`;
export const Info = styled.div.attrs<InfoProps>(() => ({
	className: "info",
}))`
	position: relative;
	label {
		padding: 0 12px;
		text-transform: capitalize;
		font-weight: 600;
	}
`;

export const Box = styled.div.attrs<BoxProps>(() => ({
	className: "box",
}))`
	background-color: white;
	position: relative;
	box-shadow: 0 5px 35px 5px rgba(0, 0, 0, 0.12);
	transform: translateY(50%);
	padding: 50px;
	border-bottom: 2px solid;
	@media (max-width: 991px) {
		padding: 50px 50px 35px;
		transform: translateY(110%) !important;
	}
`;

export const CarModelUl = styled.ul.attrs(() => ({
	className: "car-model",
}))`
	li:first-child:not(.drop-down-menu li) {
		background-color: #f2f6f7 !important;
		padding: 12px;
		margin-top: 15px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #666;
	}
	@media (max-width: 991px) {
		li:first-child:not(.drop-down-menu li) {
			margin-bottom: 30px;
		}
	}
`;

export const DropDownMenu = styled.ul.attrs(() => ({
	className: "drop-down-menu",
}))`
	position: absolute;
	width: 100%;
	z-index: 1000;
	bottom: -165%;
	background-color: #fff;
	box-shadow: 0 5px 35px 5px rgba(0, 0, 0, 0.12);
	max-height: 144px;
	overflow-y: scroll;
	li {
		padding: 12px !important;
		transition: var(--main-transition);
		text-transform: capitalize;
		&:hover {
			background-color: var(--red-color);
			color: #fff;
		}
	}
`;

const Date = styled.input.attrs(() => ({
	type: "date",
	required: true,
}))`
	border: none;
	outline: none;
	background-color: transparent;
	width: 100%;
	color: #666;
`;
const Text = styled.div`
	h3,
	span {
		font-weight: bold;
		font-size: 50px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: #fff;
		text-align: center;
		width: 100%;
		text-transform: uppercase;
	}
	span {
		top: 44%;
		font-size: 24px;
		color: var(--red-color);
		@media (max-width: 668px) {
			top: 36%;
		}
		@media (max-width: 402px) {
			top: 30%;
		}
	}
`;
export default Landing;
