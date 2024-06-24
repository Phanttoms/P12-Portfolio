// src/components/Modal.jsx
import styled from "styled-components";
import { theme } from "../../assets/style/Theme";
import logo from "../../assets/images/logos/github-mark-white.png";

const Modal = ({
	isOpen,
	onClose,
	content,
}: {
	isOpen: boolean;
	onClose: React.MouseEventHandler<HTMLElement>;
	content: {
		id: string;
		nom: string;
		image: string;
		description: string;
		type: any;
		url: string;
	} | null;
}) => {
	if (!isOpen || !content) return null;

	const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
		if (event.target === event.currentTarget) {
			onClose(event);
		}
	};

	return (
		<Overlay id="overlay" onClick={handleOutsideClick}>
			<ModalContentStyle id={content.id}>
				<button className="modal__button" onClick={onClose}>
					X
				</button>
				<div className="modal__content">
					<div className="modal__content__text">
						<div className="modal__content__text--text">
							<h3>{content.nom}</h3>
							<hr />
							<p>{content.description}</p>
						</div>

						<div className="modal__content__text__type">
							{content.type.map((e: string) => (
								<div
									key={e + content.id}
									className="modal__content__text__type--content"
								>
									<p>{e}</p>
								</div>
							))}
						</div>
						<div className="modal__content__text__link">
							<a href={content.url} target="_blank">
								<img src={logo} />
								<p>Lien du code</p>
							</a>
						</div>
					</div>
					<img
						className="modal__content--img"
						src={`${content.image}`}
						alt={content.nom}
					/>
				</div>
			</ModalContentStyle>
		</Overlay>
	);
};

export default Modal;

const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ModalContentStyle = styled.div`
	background: white;
	padding: 2rem;
	border-radius: 8px;
	position: relative;
	width: 90%;
	max-width: 45rem;
	height: auto;
	border: 0.1rem solid ${theme.colors.green};
	.modal__button {
		position: absolute;
		top: 10px;
		right: 10px;
		background: none;
		border: none;
		font-size: 1.2rem;
		cursor: pointer;
		color: black;
	}
	.modal__content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		background-color: white;
		&--img {
			max-width: 60%;
			height: auto;
			object-fit: contain;
		}
		&__text {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			height: auto;
			&--text {
				display: flex;
				flex-direction: column;
				align-items: center;
			}
			&__type {
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: center;
				gap: 2rem;
				&--content {
					background-color: ${theme.colors.grey};
					padding: 0.3rem;
					margin: 2rem 0;
				}
			}
			&__link {
				a {
					display: flex;
					flex-direction: row;
					align-items: center;
					padding: 0.6rem;
					gap: 1rem;
					background: linear-gradient(145deg, #444, #222);
					border: 0.1rem solid ${theme.colors.green};
					box-shadow: inset 1px 1px 2px rgba(255, 255, 255, 0.1),
						inset -1px -1px 2px rgba(0, 0, 0, 0.7),
						1px 1px 3px rgba(0, 0, 0, 0.5);
					img {
						width: 2rem;
					}
					p {
						color: ${theme.colors.green};
					}
				}
			}
		}
	}
	@media (max-width: 768px) {
		img {
			display: none;
		}
	}
`;
