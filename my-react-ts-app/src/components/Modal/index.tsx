// src/components/Modal.jsx
import styled from "styled-components";

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
				<button onClick={onClose}>Close</button>
				<img src={`${content.image}`} alt={content.nom} />
				<h2>{content.nom}</h2>
				<p>{content.description}</p>
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
	max-width: 500px;

	img {
		max-width: 100%;
		height: auto;
	}

	button {
		position: absolute;
		top: 10px;
		right: 10px;
		background: none;
		border: none;
		font-size: 1.2rem;
		cursor: pointer;
	}
`;
