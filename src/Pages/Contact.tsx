import { Link } from "react-router-dom";
import Header from "../Sections/Header/Header";
import { Path } from "./FeaturedVehiclesSection";
import { Container } from "../Components/GlobalComponents";
import { Row } from "../Components/GlobalComponents";
import { Col } from "../Components/GlobalComponents";
import styled from "styled-components";
import ContactData, { ContactIcons } from "../Data/ContactData";
import Footer from "../Sections/Footer/Footer";

function Contact() {
	const ContactArray = ContactData.map((ele, index) => {
		return (
			<Col className={`col-lg-3 col-md-4 col-sm-6`} key={index}>
				<Box className={`${index % 2 === 1 ? "even" : ""}`}>
					{ContactIcons[index]}
					<h5>{ele.name}</h5>
					<p>{ele.information}</p>
					<span>{ele.dept}</span>
				</Box>
			</Col>
		);
	});
	return (
		<>
			<Header />
			<Path>
				<h3>Contact</h3>
				<h6>
					<Link to={"/"} className="link-nav">
						Home
					</Link>{" "}
					/ Contact
				</h6>
			</Path>
			<Container>
				<Row>{ContactArray}</Row>
				<Row>
					<Col className="col-lg-6">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d206253.5324458531!2d-115.33981002985016!3d36.12488712378223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1706555913762!5m2!1sen!2s"
							width="100%"
							height="450px"
							style={{ border: "0" }}
							allowFullScreen={false}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</Col>
					<Col className="col-lg-6">
						<ContactBox>
							<h3>
								send a <span>message</span>
							</h3>
							<p>
								Morning itself it seed two sixth let creeping upon greater
								fruitful brought dominion winged great stars be open, creature
								won’t. You’re face that bring they’re life days lesser. Face it
								day itself rule he be saw waters.
							</p>
							<InputBox>
								<input type="text" placeholder="Your Name" />
								<input type="text" placeholder="Your Email" />
								<textarea name="" id="input" placeholder="Message"></textarea>
								<input type="submit" />
							</InputBox>
						</ContactBox>
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	);
}

const Box = styled.div`
	background-color: #f1f5fa;
	padding: 30px;
	text-align: center;
	position: relative;
	margin-bottom: 100px;
	min-height: 202px;
	&::before {
		content: "";
		position: absolute;
		border: 10px solid;
		border-color: var(--second-color) transparent transparent transparent;
		bottom: 0;
		right: 0px;
		transform: rotate(-45deg);
	}
	.contact-icon {
		background-color: var(--second-color);
		color: #fff;
		width: 70px;
		height: 70px;
		padding: 20px;
		position: absolute;
		top: -20%;
		left: 50%;
		transform: translateX(-50%);
	}
	&.even .contact-icon {
		background-color: var(--red-color) !important;
	}
	h5 {
		margin: 20px 0 10px;
		font-weight: bold;
		text-transform: capitalize;
	}
	p {
		color: #333333;
	}
`;
const ContactBox = styled.form`
	h3,
	span {
		text-transform: capitalize;
		color: var(--second-color);
		font-weight: bold;
		letter-spacing: 1px;
		margin-bottom: 20px;
		@media (max-width: 991px) {
			margin-top: 30px;
		}
	}
	span {
		color: var(--red-color);
	}
`;
const InputBox = styled.div`
	display: flex;
	flex-direction: column;
	input,
	#input {
		margin-top: 20px;
		border: 0;
		outline: none;
		padding: 10px 40px;
		border: 1px solid #dddddd;
		color: #aaaaaa;
	}
	#input {
		height: 100px;
	}
	input[type="submit"] {
		background-color: var(--red-color);
		color: #fff;
		width: fit-content;
		text-transform: uppercase;
		border: 0;
		font-weight: bold;
		letter-spacing: 2px;
		transition: var(--main-transition);
		margin-bottom: 100px;
	}
`;
export default Contact;
