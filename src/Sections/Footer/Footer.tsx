import { Logo } from "../../Sections/Header/Header";
import { Container } from "../../Components/GlobalComponents";
import styled from "styled-components";
import LogoImage from "../../Assets/imgs/footer-logotype-min-1.png";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { RiInstagramLine } from "react-icons/ri";
import { Row } from "../../Components/GlobalComponents";
import { Col } from "../../Components/GlobalComponents";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { SlEarphonesAlt } from "react-icons/sl";
import { Link } from "react-router-dom";

function Footer() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	const footerLinks = [
		"Home",
		"Featured Cars",
		"Reviews",
		"About Us",
		"Contact",
	];
	const footerLinksPath = ["", "featured-cars", "reviews", "about", "contact"];

	return (
		<FooterWrapper>
			<Container>
				<Logo
					src={LogoImage}
					className="logo"
					style={{ margin: "0 auto", display: " block" }}
				/>
				<Social>
					<FaFacebook className="social-icon" />
					<BsTwitterX className="social-icon" />
					<FaLinkedin className="social-icon" />
					<SiGmail className="social-icon" />
					<RiInstagramLine className="social-icon" />
				</Social>
				<FooterBox>
					<Row>
						{" "}
						<Col className="col-lg-4 col-md-6 about-us">
							<Heading>About Us</Heading>
							<p>
								Ceipisicing elit sed do eiusmod tempor laboe dolore magna aliqa.
							</p>
							<ContactBox>
								<Heading>Contact Info</Heading>
								<Info>
									<InfoContent>
										<IoLocationOutline />
										<span>3135 Oliver St, Fort Worth TX 76134</span>
									</InfoContent>
									<InfoContent>
										<MdOutlineEmail />
										<a href="mailto:support@domain.com">
											<span className="email-link">support@domain.com</span>
										</a>
									</InfoContent>
									<InfoContent>
										<SlEarphonesAlt />
										<span>Phone:+ (123) 456 74700</span>
										<h6 className="design">
											Design by{" "}
											<a
												target="_blank"
												href="https://preview.themeforest.net/item/revus-automotive-wordpress-theme/full_screen_preview/27028118?_ga=2.37893603.1753606682.1705265494-1066457588.1702582666"
											>
												Revus
											</a>
										</h6>
										<div>
											Coded With React By {""}
											<a
												className="linkedin-link"
												href="https://www.linkedin.com/in/mehdy-asaad/"
												target="_blank"
											>
												MEHDY ASAAD
											</a>
										</div>
									</InfoContent>
								</Info>
							</ContactBox>
						</Col>
						<Col className="col-lg-4 col-md-6 customer-links">
							<Heading>Customer Links</Heading>
							<ul className="links">
								{footerLinks.map((ele, index) => {
									return (
										<Link
											className="footer-link"
											to={`/${footerLinksPath[index]}`}
											onClick={scrollToTop}
										>
											{ele}
										</Link>
									);
								})}
							</ul>
						</Col>
						<Col className="col-lg-4 col-md-6 subscribe">
							<Heading>Subscribe Newsletter</Heading>
							<p>
								Get our weekly newsletter for latest car news exclusive offers
								and deals and more.
							</p>
							<Subscribe>
								<Input type="email" placeholder="Your Email*" />
								<button>Subscribe</button>
							</Subscribe>
						</Col>
					</Row>
				</FooterBox>
			</Container>
		</FooterWrapper>
	);
}

const FooterWrapper = styled.div`
	background-color: #121820;
	padding: 100px 0;
`;
const Social = styled.div`
	text-align: center;
	margin-top: 40px;
	color: #a9aeb3;
	.social-icon {
		background-color: var(--second-color);
		cursor: pointer;
		margin: 0 12px;
		border-radius: 50%;
		width: 35px;
		height: 35px;
		padding: 10px;
		transition: var(--main-transition);
		&:hover {
			background-color: var(--red-color);
			color: #fff;
		}
	}
`;
const FooterBox = styled.div`
	margin-top: 70px;
	.about-us {
		p {
			color: #a9aeb3;
			margin: 40px 0;
		}
	}
	.customer-links {
		text-align: center;
		ul {
			display: flex;
			flex-direction: column;
			.footer-link {
				margin-top: 20px;
				text-decoration: none;
				color: #a9aeb3;
				position: relative;
				transition: var(--main-transition);
			}
			.footer-link:hover {
				padding-left: 5px;
				color: var(--red-color);
			}
		}
		@media (max-width: 768px) {
			margin-top: 50px;
			text-align: left;
		}
	}
	.subscribe {
		color: #a9aeb3;
		@media (max-width: 991px) {
			margin-top: 50px;
		}
	}
`;
const ContactBox = styled.div``;
const InfoContent = styled.div`
	margin-top: 20px;
	span {
		margin-left: 10px;
		text-decoration: none;
	}
	.linkedin-link {
		color: var(--red-color);
	}
	a {
		text-decoration: none;
		color: #a9aeb3;
	}
	.design {
		display: block;
		margin-top: 30px;
		a {
			color: var(--red-color);
		}
	}
	.email-link {
		transition: var(--main-transition);
		&:hover {
			color: var(--red-color);
		}
	}
`;
const Info = styled.div`
	color: #a9aeb3;
`;
const Subscribe = styled.form`
	button {
		border: 0;
		outline: none;
		margin-top: 20px;
		padding: 10px 18px;
		background-color: var(--red-color);
		color: #fff;
		text-transform: uppercase;
		cursor: pointer;
		font-size: 14px;
		letter-spacing: 1px;
	}
`;

const Heading = styled.h5`
	color: #fff;
	margin-bottom: 30px;
	font-weight: bold;
	text-transform: capitalize;
`;

const Input = styled.input`
	width: 100%;
	padding: 10px 20px;
	border: none;
	outline: none;
	caret-color: #666;
	&::placeholder {
		color: #999;
		text-transform: uppercase;
		font-size: 14px;
	}
`;

export default Footer;
