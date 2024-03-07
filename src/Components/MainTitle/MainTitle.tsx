import styled from "styled-components";

interface MainTitleProps {
	title: string;
	heading: string;
	textSpan: string;
	className?: string;
}

const MainTitleContainer = styled.div.attrs(props => ({
	className: props.className ? `main-title ${props.className}` : "main-title",
}))`
	text-align: center;

	p {
		margin-bottom: 5px;
		font-size: 13px;
		color: #253241;
		font-weight: bold;
		text-transform: uppercase;
	}

	h2 {
		text-transform: uppercase;
		font-weight: 700;
		letter-spacing: 2px;
		font-size: 40px;

		span {
			color: var(--red-color);
		}
	}

	&.featured-vehicles-title {
		color: #fff;
		text-align: left !important;
		padding: 50px 0px;

		p {
			color: #fff !important;
		}
		@media (max-width: 991px) {
			text-align: center !important;
		}
	}
`;

function MainTitle(props: MainTitleProps) {
	return (
		<MainTitleContainer className={props.className}>
			<p>{props.title}</p>
			<h2>
				{props.heading}
				<span> {props.textSpan}</span>
			</h2>
		</MainTitleContainer>
	);
}

export default MainTitle;
