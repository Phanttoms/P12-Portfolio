import styled from "styled-components";
import { theme } from "../../assets/style/Theme";

export default function Card({
	id,
	src,
	title,
	onClick,
}: {
	id: string;
	src: string;
	title: string;
	onClick: React.MouseEventHandler<HTMLDivElement>;
}) {
	return (
		<CardStyle id={id} onClick={onClick}>
			<div className="card__open">
				<p>{"[+]"}</p>
			</div>
			<img className="card__image" src={`${src}`} alt={title} />

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
	position: relative;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
	background-color: white;
	transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;

	&:hover {
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
		transform: translateY(-0.5rem);
	}
	.card__open {
		position: absolute;
		display: flex;
		top: 0;
		right: 0;
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
		position: absolute;
		bottom: 0;
		width: 100%;
		padding-top: 1rem;
		padding-bottom: 1rem;
		text-align: center;
		background: linear-gradient(145deg, #444, #222);
		border-top: 1px solid #666;
		box-shadow: inset 1px 1px 2px rgba(255, 255, 255, 0.1),
			inset -1px -1px 2px rgba(0, 0, 0, 0.7), 1px 1px 3px rgba(0, 0, 0, 0.5);
	}
`;
