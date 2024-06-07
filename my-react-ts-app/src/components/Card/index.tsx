import styled from "styled-components";
import { theme } from "../../assets/style/Theme";

export default function Card({ url, title }: { url: string; title: string }) {
	return (
		<CardStyle className="projet__container__card">
			<img src={url} />
			<h3>{title}</h3>
		</CardStyle>
	);
}

const CardStyle = styled.div`
	width: 20rem;
	height: 20rem;
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	border: 0.1rem solid ${theme.colors.green};
	flex-direction: column;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	h3 {
		color: ${theme.colors.purple};
		background-color: ${theme.colors.black};
		width: 100%;
		padding-top: 1rem;
		padding-bottom: 1rem;
		text-align: center;
	}
`;
