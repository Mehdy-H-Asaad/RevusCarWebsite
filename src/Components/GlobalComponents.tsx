import styled from "styled-components";

export const Col = styled.div.attrs(props => ({
	className: props.className,
}))``;

export const Row = styled.div.attrs(() => ({
	className: "row",
}))``;

export const Container = styled.div.attrs(() => ({
	className: "container",
}))``;

export const WelcomeBox = styled.div`
	@media (max-width: 991px) {
		margin-bottom: 60px;
		border-right: none !important;
	}
	&:not(:last-child) {
		border-right: 1px solid rgba(128, 128, 128, 0.502);
	}
	.check-dollar {
		font-size: 35px;
		display: block !important;
		text-align: center;
		margin-bottom: 35px;
	}
	.text h3 {
		font-size: 16px;
		font-weight: 600;
		max-width: 180px;
		margin: 0 auto;
		line-height: 1.5;
		margin-bottom: 17px;
		text-align: center;
		text-transform: uppercase;
	}

	.dollar,
	.earth,
	.shield {
		font-size: 30px;
		width: fit-content;
		margin: 0 auto;
		display: block;
		margin-bottom: 25px;
		font-weight: 600;
	}
	.text p {
		text-align: center;
		max-width: 300px;
		color: #666;
		margin: 0 auto;
	}
`;
export const LoaderBar = styled.div.attrs(() => ({
	className: "loader",
}))`
	width: 5.4em;
	height: 5.4em;
	border: 0.4em solid rgb(84, 84, 84);
	border-left-color: var(--red-color);
	border-radius: 45%;
	animation: spin 0.7s linear infinite;
	display: flex;
	align-items: center;
	justify-content: center;

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
`;

export default WelcomeBox;
