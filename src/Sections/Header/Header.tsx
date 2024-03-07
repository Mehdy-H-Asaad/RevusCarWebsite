import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import NavLinks from "../../Data/NavLinksData";
import styled from "styled-components";
import LogoImage from "../../Assets/imgs/revus-logotype-min.png";

function Header() {
	const NavLinksArray = NavLinks.map((ele, index) => {
		return (
			<NavLink key={index} className={`nav-item nav-link`} to={ele.to}>
				{ele.name}
			</NavLink>
		);
	});

	return (
		<NavBar>
			<div className="container">
				<Link to={"/"} className="navbar-brand">
					<Logo className="logo" src={LogoImage} />
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mx-auto mb-2 mb-lg-0">
						{/* */}
						{NavLinksArray}
						{/*  */}
					</ul>
					<CallUs>
						<i className="fa-solid fa-phone phone"></i>
						<SpanContainer>
							<span>Call Us Today!</span>
							<PhoneNumber>+1 755 302 8549</PhoneNumber>
						</SpanContainer>
					</CallUs>
				</div>
			</div>
		</NavBar>
	);
}

const NavBar = styled.div.attrs(() => ({
	className: "navbar navbar-expand-lg navbar-light  ",
}))`
	background-color: #fff !important;
	.active {
		color: var(--red-color) !important;
	}
`;

const CallUs = styled.div`
	display: flex;
	align-items: center;
`;

const SpanContainer = styled.div`
	margin-left: 20px;
`;

const PhoneNumber = styled.div`
	display: block;
`;

const Logo = styled.img.attrs(props => ({
	src: props.src,
}))``;

export { Logo };
export default Header;
