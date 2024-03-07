import { Container } from "../../Components/GlobalComponents";
import styled from "styled-components";
import BackImage from "../../Assets/imgs/fancy-text-image-background-min.jpg";
import MainTitle from "../../Components/MainTitle/MainTitle";
import { Row } from "../../Components/GlobalComponents";
import { Col } from "../../Components/GlobalComponents";
import RevusDataWork from "../../Data/RevusWorkData";

interface RevusDataWrok {
	number: string;
	title: string;
	paragh: string;
}

function RevusWork() {
	const RevusDataWorkArray = RevusDataWork.map(
		(ele: RevusDataWrok, index: number) => {
			return (
				<Col className="col-lg-3 col-md-6" key={index}>
					<h1>{ele.number}</h1>
					<h6>{ele.title}</h6>
					<p>{ele.paragh}</p>
				</Col>
			);
		}
	);
	return (
		<RevusWorkWrapper>
			<Container>
				<MainTitle
					title="HELPS YOU TO FIND PERFECT How Revus"
					heading="How Revus"
					textSpan="Works"
				/>
				<Row>
					{/*  */}
					{RevusDataWorkArray}
					{/*  */}
				</Row>
			</Container>
		</RevusWorkWrapper>
	);
}

const RevusWorkWrapper = styled.div.attrs(props => ({
	className: props.className,
}))`
	background-image: url(${BackImage});
	padding: 80px 0;
	background-position: center;
	h1 {
		color: var(--second-color);
		font-size: 70px;
		font-weight: bold;
		margin: 40px auto 15px;
		font-family: "Montserrat";
		position: relative;
		width: fit-content;
		&::before {
			content: "";
			position: absolute;
			background-color: var(--red-color);
			width: 20px;
			height: 20px;
			border: 5px solid #fff;
			border-radius: 50%;
			transform: translateY(-50%);
			top: 50%;
			left: 28px;
		}
	}
	h6 {
		color: var(--second-color);
		font-size: 18px;
		font-weight: bold;
		text-align: center;
		text-transform: capitalize;
	}
	p {
		text-align: center;
		font-size: 14px;
		max-width: 250px;
		margin: 15px auto;
	}
`;

export default RevusWork;
