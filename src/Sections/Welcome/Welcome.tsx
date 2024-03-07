import MainTitle from "../../Components/MainTitle/MainTitle";
import WelcomeData from "../../Data/WelcomeData";
import WelcomeBox from "../../Components/GlobalComponents";
import styled from "styled-components";
import { Container } from "../../Components/GlobalComponents";

function Welcome() {
	const WelcomeDataArray = WelcomeData.map(ele => {
		return (
			<WelcomeBox className="col-lg-4 col-md-6 welcome-box">
				<i className={`${ele.className}`}></i>
				<div className="text">
					<h3>{ele.heading}</h3>
					<p>{ele.text}</p>
				</div>
			</WelcomeBox>
		);
	});

	return (
		<>
			<WelcomeWrapper>
				<Container>
					<MainTitle
						title="HELPS YOU TO FIND YOUR NEXT CAR EASILY"
						heading="Welcome to"
						textSpan="Revus"
					/>
					<WelcomeContent>
						<Row>{WelcomeDataArray}</Row>
					</WelcomeContent>
				</Container>
			</WelcomeWrapper>
		</>
	);
}

const Row = styled.div.attrs(() => ({
	className: "row",
}))``;

const WelcomeWrapper = styled.div`
	padding-bottom: 80px;
`;

const WelcomeContent = styled.div`
	padding-top: 70px;

	@media (max-width: 991px) {
		padding-top: 70px;
	}
`;
export default Welcome;
