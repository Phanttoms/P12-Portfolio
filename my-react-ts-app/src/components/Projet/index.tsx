import styled from "styled-components";
import Card from "../Card";
import Modal from "../Modal";
import { data } from "../../data/projet";
import { useState } from "react";
import { theme } from "../../assets/style/Theme";

interface Project {
	id: string;
	nom: string;
	image: string;
	description: string;
	type: any;
	url: string;
}

export default function Projet() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const body = document.body;

	const handleCardClick = (project: Project) => {
		setSelectedProject(project);
		setIsModalOpen(true);
		body.classList.add("no-scroll");
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedProject(null);
		body.classList.remove("no-scroll");
	};

	return (
		<ProjetStyle id="section3">
			<h2 className="projet__title">Mes Projets</h2>
			<hr />
			<div className="projet__container">
				{data.map((project: Project) => (
					<Card
						key={project.id}
						id={project.id}
						src={project.image}
						title={project.nom}
						onClick={() => handleCardClick(project)}
					/>
				))}
			</div>
			<Modal
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				content={selectedProject}
			/>
		</ProjetStyle>
	);
}

const ProjetStyle = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem 0;
	background-color: ${theme.colors.grey};
	.projet__title {
	}
	.projet__container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1rem;
		width: 80%;
		height: auto;
	}
`;
