import MainTitle from "../../Components/MainTitle/MainTitle";
import { Container } from "../../Components/GlobalComponents";
import styled from "styled-components";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import ReviewImage from "../../Assets/imgs/testimonial-slider-image-background-min.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FaQuoteRight } from "react-icons/fa";
import ReviewsData from "../../Data/ReviewsData";

function Reviews() {
	const ReviewsDataArray = ReviewsData.map((ele, index) => {
		return (
			<SplideSlide key={index}>
				<Box className="box">
					<Paragh className="paragh">{ele.paragh}</Paragh>
					<Info className="info">
						<img src={ele.img} alt="" className="img-fluid" />
						<PersonalInfo>
							<h6>{ele.name}</h6>
							<h6>{ele.title}</h6>
						</PersonalInfo>
						<FaQuoteRight />
					</Info>
				</Box>
			</SplideSlide>
		);
	});

	const StyledOptions = {
		type: "loop",
		focus: "center",
		perPage: 3,
		arrows: false,
		pagination: true,
		gap: "1rem",
		breakpoints: {
			991: {
				perPage: 2,
			},
			767: {
				perPage: 1,
			},
		},
	};
	return (
		<ReviewsWrapper>
			<Container>
				<MainTitle
					title="HELPS YOU TO FIND PERFECT CAR"
					heading="Customer"
					textSpan="Reviews"
				/>
				<BiSolidQuoteAltLeft className="quote-icon" />
				<Splide options={StyledOptions}>
					{/*  */}
					{ReviewsDataArray}
					{/*  */}
				</Splide>
			</Container>
		</ReviewsWrapper>
	);
}

const ReviewsWrapper = styled.div`
	padding: 100px 0;
	background-image: url(${ReviewImage});
	background-position: bottom;
	position: relative;
	background-repeat: no-repeat;
	color: #fff;
	li.is-active {
		.box {
			background-color: #fff;
			.paragh {
				color: black;
			}
			.info {
				color: var(--second-color);
			}
		}
	}
	P {
		color: #fff;
	}
	.quote-icon {
		display: block;
		margin: 0 auto;
		font-size: 28px;
		margin-top: 30px;
		position: relative;
	}
	.quote-icon::after {
		content: "";
		position: absolute;
		width: 30px;
		height: 2px;
		background-color: black;
	}
`;

const Box = styled.div.attrs(props => ({
	className: props.className,
}))`
	background-color: #34404e;
	padding: 20px 30px 20px;
	line-height: 2;
	font-style: italic;
	margin-top: 50px;
	position: relative;
	border-radius: 4px;
`;

const Info = styled.div.attrs(props => ({
	className: props.className,
}))`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;
	img {
		width: 50px;
		border-radius: 50%;
		height: 50px;
		object-fit: cover;
	}
`;

const PersonalInfo = styled.div`
	margin-left: 15px;
	margin-right: auto;

	h6 {
		text-transform: capitalize;
		font-weight: bold;
	}
	h6:nth-child(2) {
		color: #d3d3d3;
		font-size: 12px;
		letter-spacing: 1px;
		text-transform: uppercase;
	}
`;

const Paragh = styled.p`
	font-weight: bold;
`;
export default Reviews;
