import { Row } from "../../Components/GlobalComponents";
import MainTitle from "../../Components/MainTitle/MainTitle";
import { Container } from "../../Components/GlobalComponents";
import styled from "styled-components";
import { Col } from "../../Components/GlobalComponents";
import { SlCallIn } from "react-icons/sl";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SalesData from "../../Data/SalesData";

function Sales() {
	const SalesDataArray = SalesData.map((ele, index) => {
		return (
			<Col className="col-lg-3 col-md-6" key={index}>
				<Box>
					<PersonalInfo className="personal-info">
						<img src={ele.img} alt="" className="img-fluid" />
						<Social className="social">
							<FaFacebook className="social-icon" />
							<FaXTwitter className="social-icon" />
							<FaLinkedin className="social-icon" />
						</Social>
					</PersonalInfo>
					<Info className="info">
						<h6>{ele.name}</h6>
						<span>{ele.role}</span>
					</Info>
					<Phone>
						<SlCallIn />
						<PhoneSpan>{ele.phone}</PhoneSpan>
					</Phone>
				</Box>
			</Col>
		);
	});

	return (
		<SalesWrapper>
			<Container>
				<MainTitle
					title="HELPS YOU TO FIND PERFECT CAR"
					textSpan="Team"
					heading="Our Sales"
				/>
				<Row>{SalesDataArray}</Row>
			</Container>
		</SalesWrapper>
	);
}

const SalesWrapper = styled.div`
	padding: 80px 0;
`;

const Box = styled.div`
	margin-top: 40px;
	position: relative;
	margin-left: 20px;

	cursor: pointer;
	.icon {
		color: var(--red-color);
	}
	@media (max-width: 768px) {
		margin: 40px auto;
		width: fit-content;
	}
	&:hover {
		.personal-info::before {
			background-color: #323e4bc4;
		}
		.info {
			background-color: var(--red-color);
		}
		.social {
			top: 50%;
			opacity: 1;
		}
	}
`;

const Info = styled.div.attrs(props => ({
	className: props.className,
}))`
	background-color: var(--second-color);
	padding: 40px 30px 20px;
	margin: -30px 0 15px 10px;
	width: 100%;
	position: relative;
	z-index: -1;
	transition: var(--main-transition);
	&::after {
		content: "";
		position: absolute;
		border: 7px solid;
		border-color: transparent transparent transparent #fff;
		right: 0;
		bottom: 0;
		transform: rotate(45deg);
	}
	&::before {
		content: "";
		position: absolute;
		width: 104%;
		height: 1px;
		background-color: #dddddddd;
		left: -11px;
		bottom: -50px;
	}
	h6 {
		text-transform: capitalize;
		color: #fff;
		font-weight: bold;
		letter-spacing: 1px;
		font-size: 18px;
	}
	span {
		color: #fff;
	}
`;

const Phone = styled.div`
	text-align: center;
	padding-bottom: 12px;
`;

const PhoneSpan = styled.span`
	font-weight: bold;
	margin-left: 10px;
	font-size: 14px;
	cursor: pointer;
	&:hover {
		color: var(--red-color);
	}
`;

const Social = styled.div.attrs(props => ({
	className: props.className,
}))`
	position: absolute;
	top: 45%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	justify-content: center;
	gap: 40px;
	transition: var(--main-transition);
	opacity: 0;
	.social-icon {
		color: var(--second-color);
		background-color: #fff;
		border-radius: 50%;
		padding: 6px;
		width: 32px;
		height: 32px;
		transition: var(--main-transition);
		cursor: pointer;
		&:hover {
			color: var(--red-color);
		}
	}
`;

const PersonalInfo = styled.div.attrs(props => ({
	className: props.className,
}))`
	position: relative;
	img {
		width: 100%;
	}
	&::before {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		transition: var(--main-transition);
	}
`;
export default Sales;
