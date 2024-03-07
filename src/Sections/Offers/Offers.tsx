import { Row as OriginalRow } from "../../Components/GlobalComponents";
import MainTitle from "../../Components/MainTitle/MainTitle";
import { Container } from "../../Components/GlobalComponents";
import styled from "styled-components";
import { Col } from "../../Components/GlobalComponents";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";
import OffersData from "../../Data/OffersData";
import { FaArrowsSpin } from "react-icons/fa6";
import { GiAutoRepair } from "react-icons/gi";
import { GrUserWorker, GrPaint } from "react-icons/gr";
import { TbCheckupList } from "react-icons/tb";

function Offers() {
	const [toggle, setToggle] = useState(0);

	const handleClick = (index: number) => {
		setToggle(index);
	};

	const OffersDataArray = OffersData.map((ele, index: number) => {
		return (
			<>
				<CustomCol className="col-lg-2 col-md-4 col-sm-6" key={index}>
					<Box
						className={toggle === index ? "active" : ""}
						onClick={() => handleClick(index)}
					>
						{index === 0 && <TbCheckupList className="icon" />}
						{index === 1 && <FaArrowsSpin className="icon" />}
						{index === 2 && <GiAutoRepair className="icon" />}
						{index === 3 && <GrUserWorker className="icon" />}
						{index === 4 && <GrPaint className="icon" />}
						<h6>{ele.title}</h6>
					</Box>
				</CustomCol>
			</>
		);
	});

	const imgArray = OffersData.map((ele, index) => {
		return (
			<img
				key={index}
				src={toggle === index ? ele.image : ""}
				alt=""
				className="img-fluid"
			/>
		);
	});

	const secOffersDataArray = OffersData.map((ele, index) => {
		return (
			<>
				{toggle === index && (
					<>
						<Benfits key={index}>
							<FaCheck className="check-icon" />
							<span>{ele.firstSpan}</span>
						</Benfits>
						<Benfits>
							<FaCheck className="check-icon" />
							<span>{ele.secondSpan}</span>
						</Benfits>
						<Benfits>
							<FaCheck className="check-icon" />
							<span>{ele.thirdSpan}</span>
						</Benfits>
						<Benfits>
							<FaCheck className="check-icon" />
							<span>{ele.fourthSpan}</span>
						</Benfits>
					</>
				)}
			</>
		);
	});

	const ParaghArray = OffersData.map((ele, index) => {
		return (
			<>
				{toggle === index && (
					<>
						<Heading>{ele.title}</Heading>
						<Paragh>{ele.firstPara}</Paragh>
						<Paragh>{ele.secondPara}</Paragh>
					</>
				)}
			</>
		);
	});

	return (
		<>
			<OfferSection>
				<Container>
					<MainTitle
						heading="Services We"
						title="HELPS YOU TO FIND YOUR NEXT CAR EASILY"
						textSpan="Offers"
					/>
					<CustomRow>
						{/*  */}
						{OffersDataArray}
						{/*  */}
					</CustomRow>
					<CustomRow>
						<CustomCol className="col-lg-5">
							{/*  */}
							{imgArray}
							{/*  */}
						</CustomCol>
						<CustomCol className="col-lg-5">
							<Info>
								{ParaghArray}
								<BenfitsBox>
									{/*  */}
									{secOffersDataArray}
									{/*  */}
								</BenfitsBox>
							</Info>
						</CustomCol>
					</CustomRow>
				</Container>
			</OfferSection>
		</>
	);
}

const OfferSection = styled.div`
	padding: 100px 0;
	background-color: #f1f5fa;
`;

const CustomRow = styled(OriginalRow)`
	margin-top: 60px;
	justify-content: center;
	@media (max-width: 991px) {
		justify-content: flex-start;
	}
`;

const Box = styled.div`
	transition: var(--main-transition);
	position: relative;
	background-color: #fff;
	color: var(--second-color);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 60px 100px;
	text-align: center;
	cursor: pointer;
	box-shadow: 0 0 12px 8px rgba(129, 129, 129, 0.06);
	@media (min-width: 991px) and (max-width: 1200px) {
		padding: 60px;
	}
	.icon {
		vertical-align: middle;
		font-size: 40px;
		margin-bottom: 20px;
	}
	&::before {
		content: "0" counter(name);
		position: absolute;
		color: #66666687;
		font-size: 22px;
		top: 0;
		left: 0;
		margin: 24px;
		font-weight: bold;
		letter-spacing: 2px;
	}
	&.active {
		background-color: var(--red-color);
		color: #fff;
		&::before {
			color: #fff;
		}
	}
	h6 {
		text-transform: capitalize;
		font-weight: bold;
		letter-spacing: 2px;
		font-size: 20px;
		min-width: 105px;
	}
`;

const CustomCol = styled(Col)`
	padding: 0 !important;
	counter-increment: name;
	@media (max-width: 576px) {
		padding: 0 calc(var(--bs-gutter-x) * 0.5) !important;
	}
`;

const Info = styled.div`
	margin-left: 40px;
	@media (max-width: 991px) {
		margin-left: 0;
		margin-top: 30px;
	}
`;

const BenfitsBox = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	max-width: 400px;
	margin-top: 30px;
	gap: 30px 0;
	width: 110%;
	@media (max-width: 768px) {
		flex-direction: column;
		width: 100%;
	}
`;

const Heading = styled.h4.attrs(props => ({
	children: props.children,
}))`
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: bold;
	color: var(--second-color);
	margin-bottom: 25px;
`;

const Paragh = styled.p.attrs(props => ({
	children: props.children,
}))`
	color: #666;
`;
const Benfits = styled.div`
	.check-icon {
		color: var(--red-color);
		margin-right: 10px;
	}
	width: 50%;
	span {
		color: var(--second-color);
		font-weight: bolder;
		text-transform: capitalize;
		font-size: 14px;
	}
`;

export default Offers;
