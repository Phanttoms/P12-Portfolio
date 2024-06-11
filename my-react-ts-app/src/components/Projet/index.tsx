import styled from "styled-components";
import Card from "../Card";
import Modal from "../Modal";

// import data from "../../data/projet.json";
import { data } from "../../data/projet";
import { useState } from "react";

// const data = [
// 	{
// 		id: "1",
// 		nom: "Riding Cities",
// 		image: "projetRidingCities.png",
// 		description: "une description",
// 	},
// 	{
// 		id: "2",
// 		nom: "Booki",
// 		image: "projetBooki.png",
// 		description: "une description",
// 	},
// 	{
// 		id: "3",
// 		nom: "Ohmyfood",
// 		image: "projetOhmyfood.png",
// 		description: "une description",
// 	},
// 	{
// 		id: "4",
// 		nom: "Print It",
// 		image: "projetPrintIt.png",
// 		description: "une description",
// 	},
// ];

interface Project {
	id: string;
	nom: string;
	image: string;
	description: string;
}

export default function Projet() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);

	const handleCardClick = (project: Project) => {
		setSelectedProject(project);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedProject(null);
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
						url={project.image}
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
