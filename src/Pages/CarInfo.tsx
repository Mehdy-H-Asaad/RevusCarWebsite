import { Link } from "react-router-dom";
import Footer from "../Sections/Footer/Footer";
import Header from "../Sections/Header/Header";
import { Path } from "./FeaturedVehiclesSection";
import { Row } from "../Components/GlobalComponents";
import { Col } from "../Components/GlobalComponents";
import { Container } from "../Components/GlobalComponents";
import styled from "styled-components";
import { CustomUseParams } from "../Components/CustomParams/Params";
import { useCarContext } from "../Components/CustomContext/Context";
import PaymentImg from "../Assets/CarInfoImgs/payment-icon_02-min.png";
import { useState } from "react";
function CarInfo() {
	const { validCarId } = CustomUseParams();

	const SelectedCar = useCarContext().find(
		ele => ele.id === parseInt(validCarId)
	);

	if (SelectedCar === undefined) {
		throw new Error("UNDEFINED");
	}

	const VehiclesSpecArray = Object.entries(SelectedCar).map(
		([key, value], index) => {
			if (key !== "sectionImg" && key !== "id") {
				return (
					<ItemContainer className="col-lg-6" key={index}>
						<dt className="col-lg-5 col-md-6 col-sm-6">{key} :</dt>
						<dd className="col-lg-7 col-md-6 col-sm-6">{value}</dd>
					</ItemContainer>
				);
			}
			return null;
		}
	);
	interface InputValues {
		price: number;
		interest: number;
		month: number;
		down: number;
	}

	const [inputValues, setInputValues] = useState<InputValues>({
		price: SelectedCar.price,
		interest: 5,
		month: 36,
		down: 10000,
	});
	const numberWithCommas = (value: any) => {
		return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};

	const [calcResult, setCalcResult] = useState({
		monthlyPayment: 0,
		TotalPaid: 0,
		totalInterest: 0,
	});
	// CALC THE MONTHLY PAYEMNT
	const CalcPrice = (
		vehiclePrice: number,
		interestRate: number,
		months: number,
		downPayment: number
	) => {
		const actualDownPayment = Math.min(downPayment, vehiclePrice);

		const loanAmount = vehiclePrice - actualDownPayment;
		const monthlyInterestRate = interestRate / (12 * 100);

		const numerator =
			loanAmount *
			monthlyInterestRate *
			Math.pow(1 + monthlyInterestRate, months);
		const denominator = Math.pow(1 + monthlyInterestRate, months) - 1;

		const monthlyPayment = numerator / denominator;
		const TotalPaid = monthlyPayment * months + actualDownPayment;
		const totalInterest = TotalPaid - vehiclePrice;

		setCalcResult({
			monthlyPayment: numberWithCommas(Math.floor(monthlyPayment)),
			totalInterest: numberWithCommas(Math.floor(totalInterest)),
			TotalPaid: numberWithCommas(Math.floor(TotalPaid)),
		});

		if (months <= 0) {
			setCalcResult({
				TotalPaid: vehiclePrice,
				totalInterest: 0,
				monthlyPayment: 0,
			});
			return 0;
		} else if (interestRate <= 0 && months > 0) {
			setCalcResult({
				TotalPaid: vehiclePrice,
				totalInterest: 0,
				monthlyPayment: parseFloat((vehiclePrice / months).toFixed(2)),
			});
		}
	};

	// END OF THE CALC

	// START USESTATES TO GET THE VALUES OF THE INPUT FOR THE CALC
	const [displayCalc, setDisplayCalc] = useState(false);

	const HandleInput = (ele: any) => {
		const { id, value } = ele.target;

		const notAcceptingZeros = value.replace(/^0+/, "");

		const numericValue = notAcceptingZeros.replace(/[^0-9]/g, "");

		if (notAcceptingZeros === "") {
			setInputValues(prevData => ({
				...prevData,
				[id]: "0",
			}));
		} else {
			setInputValues(prevData => ({
				...prevData,
				[id]: numericValue,
			}));
		}
	};

	const handleCalc = () => {
		setDisplayCalc(true);
		CalcPrice(
			SelectedCar.price,
			inputValues.interest,
			inputValues.month,
			inputValues.down
		);
	};
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
				<Row>
					<Col className="col-lg-8">
						<img
							src={SelectedCar.sectionImg}
							alt=""
							className="img-fluid"
							style={{ width: "100%" }}
						/>
						<VehicleInfo>
							<h3>Vehicle Specifications</h3>
							<dl>
								<Row>{VehiclesSpecArray}</Row>
							</dl>
						</VehicleInfo>
					</Col>
					<Col className="col-lg-4">
						<PriceBox>
							<h6>
								Price : <span>${SelectedCar.price}</span>
							</h6>
							<img
								src={PaymentImg}
								alt=""
								className="img-fluid"
								style={{ width: "154px" }}
							/>
							<p>Included Taxes & Checkup*</p>
						</PriceBox>
						<FinancingCalc>
							<h4>financing calculator</h4>
							<InputContainer>
								<label htmlFor="price">Vehicle price($)</label>
								<input
									type="text"
									name=""
									id="price"
									readOnly
									value={SelectedCar.price}
								/>
							</InputContainer>

							<InputContainer>
								<label htmlFor="interest">Interest rate (%)</label>
								<input
									type="text"
									name=""
									id="interest"
									value={inputValues.interest}
									onChange={HandleInput}
								/>
							</InputContainer>

							<InputContainer>
								<label htmlFor="month">Period (month)</label>
								<input
									type="text"
									name=""
									id="month"
									value={inputValues.month}
									onChange={HandleInput}
								/>
							</InputContainer>

							<InputContainer>
								<label htmlFor="down">Down Payment ($)</label>
								<input
									type="text"
									name=""
									id="down"
									value={inputValues.down}
									onChange={HandleInput}
								/>
								<CalcButton onClick={handleCalc}>calculate</CalcButton>
							</InputContainer>
							{displayCalc && (
								<Result>
									{calcResult && (
										<>
											<span>monthly payment</span>
											<h6>${numberWithCommas(calcResult.monthlyPayment)}</h6>
											<span>total interest payment</span>
											<h6>${numberWithCommas(calcResult.totalInterest)}</h6>
											<span>total amount to pay</span>
											<h6>${numberWithCommas(calcResult.TotalPaid)}</h6>
										</>
									)}
								</Result>
							)}
						</FinancingCalc>
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	);
}
const VehicleInfo = styled.div`
	h3 {
		text-transform: capitalize;
		color: var(--second-color);
		margin: 40px 0 0;
		font-weight: bold;
		font-size: 24px;
		padding-bottom: 20px;
		border-bottom: 1px solid #eee;
	}
	dl {
		display: flex;
		flex-wrap: wrap;
		padding: 20px 0 20px;
	}
`;
const ItemContainer = styled.div`
	display: flex;
	dt,
	dd {
		text-transform: capitalize;
	}
	dt {
		font-weight: normal;
		color: #333333;
		width: 50%;
	}
	dd {
		font-weight: bold;
		margin-bottom: 15px;
		color: var(--second-color);
	}
`;
const PriceBox = styled.div`
	text-align: center;
	background-color: #f1f5fa;
	h6 {
		background-color: var(--second-color);
		color: #fff;
		padding: 15px 30px;
		text-align: center;
		font-weight: bold;
		font-size: 20px;
		letter-spacing: 1px;
		display: flex;
		justify-content: center;
		align-items: center;
		span {
			font-size: 24px;
			margin-left: 15px;
		}
	}
	img {
		margin: 0 auto;
		display: block;
	}
	P {
		padding: 5px 0 20px;
		font-size: 12px;
	}
`;
export const FinancingCalc = styled.div`
	background-color: #f1f5fa;
	h4 {
		text-transform: uppercase;
		background-color: var(--second-color);
		color: #fff;
		font-size: 18px;
		padding: 15px 30px;
		font-weight: bold;
		position: relative;
		&::before {
			content: "";
			position: absolute;
			border: 10px solid;
			border-color: transparent transparent var(--red-color) transparent;
			top: -3px;
			left: -3px;
			transform: rotate(-45deg);
		}
	}
`;
const InputContainer = styled.div`
	display: flex;
	padding: 20px;
	flex-direction: column;
	label {
		font-weight: 600;
		font-size: 14px;
		margin-bottom: 10px;
	}
	input {
		padding: 10px 20px;
		outline: none;
		border: 0;
		color: #aaaaaa;
	}
`;
const CalcButton = styled.div`
	background-color: var(--red-color);
	color: #fff;
	padding: 10px 20px;
	text-align: center;
	font-weight: bold;
	text-transform: uppercase;
	margin-top: 25px;
	cursor: pointer;
	transition: var(--main-transition);
`;

const Result = styled.div`
	padding: 0 20px 20px;
	text-transform: uppercase;
	margin-bottom: 30px;
	transition: var(--main-transition);
	span {
		font-size: 14px;
		font-weight: 600;
	}
	h6 {
		color: var(--second-color);
		font-size: 22px;
		font-weight: 600;
		margin: 5px 0 20px;
	}
`;
export default CarInfo;
