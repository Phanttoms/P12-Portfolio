// src/components/Modal.jsx
import styled from "styled-components";
import { theme } from "../../assets/style/Theme";

const Modal = ({
	isOpen,
	onClose,
	content,
}: {
	isOpen: boolean;
	onClose: React.MouseEventHandler<HTMLButtonElement>;
	content: {
		id: string;
		nom: string;
		image: string;
		description: string;
	} | null;
}) => {
	if (!isOpen || !content) return null;

	return (
		<Overlay>
			<ModalContent id={content.id}>
				<button className="modal__button" onClick={onClose}>
					X
				</button>
				<div className="modal__content">
					<div className="modal__content--text">
						<h3>{content.nom}</h3>
						<hr />
						<p>{content.description}</p>
					</div>
					<img
						className="modal__content--img"
						src={`${content.image}`}
						alt={content.nom}
					/>
				</div>
			</ModalContent>
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

const ModalContent = styled.div`
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
			object-fit: cover;
		}
		&--text {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
`;
