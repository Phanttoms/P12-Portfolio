import styled from "styled-components";
import { theme } from "../../assets/style/Theme";

export default function Card({
	id,
	url,
	title,
	onClick,
}: {
	id: string;
	url: string;
	title: string;
	onClick: React.MouseEventHandler<HTMLDivElement>;
}) {
	return (
		<CardStyle id={id} onClick={onClick}>
			<div className="card__close">
				<p>{"[+]"}</p>
			</div>
			<img className="card__image" src={`${url}`} alt={title} />

			<h3 className="card__title">{title}</h3>
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
	cursor: pointer;
	.card__close {
		position: absolute;
		display: flex;
		width: 20rem;
		height: 20rem;
		justify-content: flex-end;
		p {
			background-color: ${theme.colors.black};
			height: 1.4rem;
			width: 1.4rem;
			color: ${theme.colors.green};
			display: flex;
			justify-content: center;
			font-size: 0.9rem;
			border: 0.1rem solid ${theme.colors.green};
		}
	}
	.card__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.card__title {
		color: ${theme.colors.purple};
		background-color: ${theme.colors.black};
		width: 100%;
		padding-top: 1rem;
		padding-bottom: 1rem;
		text-align: center;
	}
`;
