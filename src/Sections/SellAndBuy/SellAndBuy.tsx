import { Row } from "../../Components/GlobalComponents";
import { Container } from "../../Components/GlobalComponents";
import styled from "styled-components";
import { Col } from "../../Components/GlobalComponents";
import SellAndBuyCar from "../../Assets/imgs/car-banner-red.png";
import BannerBuy from "../../Assets/imgs/banner-custom-bg-1-min.png";
import BannerSell from "../../Assets/imgs/banner-custom-bg-2-min.jpg";
function SellAndBuy() {
	return (
		<SellAndBuyWrapper>
			<Container>
				<img
					src={SellAndBuyCar}
					alt=""
					style={{ transform: "translateY(100px)" }}
				/>
				<Row>
					<Col className="col-lg-6">
						<BuyBox>ARE YOU LOOKING TO BUY A NEW CAR?</BuyBox>
					</Col>
					<Col className="col-lg-6">
						<SellBox>ARE YOU LOOKING TO SELL YOUR CAR?</SellBox>
					</Col>
				</Row>
			</Container>
		</SellAndBuyWrapper>
	);
}

const SellAndBuyWrapper = styled.div`
	position: relative;
	text-align: center;
	padding-bottom: 100px;
	@media (max-width: 768px) {
		display: none;
	}
`;

const BuyBox = styled.div`
	position: relative;
	background-image: url(${BannerBuy});
	background-position: center;
	background-color: var(--second-color);
	text-transform: uppercase;
	color: #fff;
	padding: 120px 25px 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	font-size: 20px;
	text-align: center;
	margin-left: auto;
	letter-spacing: 2px;
	font-style: italic;
	z-index: -1;
	width: 80%;
	border-radius: 0 0 0 50px;
`;

const SellBox = styled(BuyBox)`
	background-image: url(${BannerSell});
	margin-right: auto;
	margin-left: unset;
	background-color: var(--red-color);
	border-radius: 0 50px 0 0;
`;
export default SellAndBuy;
