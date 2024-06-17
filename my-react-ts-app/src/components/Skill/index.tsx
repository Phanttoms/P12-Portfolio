import styled from "styled-components";
import front1 from "../../assets/images/logos/logoHTML.png";
import front2 from "../../assets/images/logos/logoCSS.png";
import front3 from "../../assets/images/logos/logoJS.png";
import front4 from "../../assets/images/logos/logoTypeScript.svg";
import front5 from "../../assets/images/logos/logoReact.svg";
import front6 from "../../assets/images/logos/logoSass.svg";

import back1 from "../../assets/images/logos/logoNode.png";
import back2 from "../../assets/images/logos/logoExpress.png";
import back3 from "../../assets/images/logos/logoMongoDB.png";

import tool1 from "../../assets/images/logos/logoGit.png";
import tool2 from "../../assets/images/logos/logoGitHub.png";
import tool3 from "../../assets/images/logos/logoVercel.svg";
import tool4 from "../../assets/images/logos/logoRedux.svg";
import tool5 from "../../assets/images/logos/logoStyled.svg";
import tool6 from "../../assets/images/logos/logoVite.svg";
import { theme } from "../../assets/style/Theme";
import { useState } from "react";

const Skill = () => {
	const [hoveredSkill, setHoveredSkill] = useState(null);

	// Fonction pour gérer le survol d'une image
	const handleMouseEnter = (alt: any) => {
		setHoveredSkill(alt);
	};

	// Fonction pour gérer la fin du survol
	const handleMouseLeave = () => {
		setHoveredSkill(null);
	};

	const frontSkills = [
		{ src: front1, alt: "HTML", description: "Hypertext Markup Language" },
		{ src: front2, alt: "CSS", description: "Cascading Style Sheets" },
		{ src: front3, alt: "JavaScript", description: "JavaScript" },
		{ src: front4, alt: "TypeScript", description: "TypeScript" },
		{ src: front5, alt: "React", description: "React" },
		{ src: front6, alt: "Sass", description: "Sass" },
	];

	const backSkills = [
		{ src: back1, alt: "Node.js", description: "Node.js" },
		{ src: back2, alt: "Express", description: "Express.js" },
		{ src: back3, alt: "MongoDB", description: "MongoDB" },
	];

	const tools = [
		{ src: tool1, alt: "Git", description: "Git" },
		{ src: tool2, alt: "GitHub", description: "GitHub" },
		{ src: tool3, alt: "Vercel", description: "Vercel" },
		{ src: tool4, alt: "Redux", description: "Redux" },
		{ src: tool5, alt: "Styled Components", description: "Styled Components" },
		{ src: tool6, alt: "Vite", description: "Vite" },
	];

	return (
		<SkillStyle id="section2">
			<h2>Compétences</h2>
			<hr />
			<div className="skill__container">
				<div className="skill__container__content">
					<h3 className="skill__container__content--title">Front-End</h3>
					<div>
						{frontSkills.map((skill) => (
							<div
								key={skill.alt}
								className="skill__container__content--imgContainer"
								onMouseEnter={() => handleMouseEnter(skill.alt)}
								onMouseLeave={handleMouseLeave}
							>
								<img
									src={skill.src}
									alt={skill.alt}
									className="skill__container__content--img"
								/>
								{hoveredSkill === skill.alt && (
									<div className="skill__tooltip">{skill.description}</div>
								)}
							</div>
						))}
					</div>
				</div>
				<div className="skill__container__content">
					<h3 className="skill__container__content--title">Back-End</h3>
					<div>
						{backSkills.map((skill) => (
							<div
								key={skill.alt}
								className="skill__container__content--imgContainer"
								onMouseEnter={() => handleMouseEnter(skill.alt)}
								onMouseLeave={handleMouseLeave}
							>
								<img
									src={skill.src}
									alt={skill.alt}
									className="skill__container__content--img"
								/>
								{hoveredSkill === skill.alt && (
									<div className="skill__tooltip">{skill.description}</div>
								)}
							</div>
						))}
					</div>
				</div>
				<div className="skill__container__content">
					<h3 className="skill__container__content--title">
						Outils et services
					</h3>
					<div>
						{tools.map((tool) => (
							<div
								key={tool.alt}
								className="skill__container__content--imgContainer"
								onMouseEnter={() => handleMouseEnter(tool.alt)}
								onMouseLeave={handleMouseLeave}
							>
								<img
									src={tool.src}
									alt={tool.alt}
									className="skill__container__content--img"
								/>
								{hoveredSkill === tool.alt && (
									<div className="skill__tooltip">{tool.description}</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</SkillStyle>
	);
};

const SkillStyle = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem 0;
	position: relative;

	.skill__container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		flex-direction: column;
		padding: 2rem;
		margin: 0 3rem;
		gap: 2rem;
		background-color: ${theme.colors.black};
		border: 0.1rem solid ${theme.colors.green};
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
		border-radius: 2%;

		&__content {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
			border: 0.1rem solid ${theme.colors.green};
			background-color: white;
			box-shadow: 2px 4px 5px rgba(12, 207, 12, 0.616);
			gap: 1rem;
			height: 100%;

			&--title {
				background: linear-gradient(145deg, #444, #222);
				box-shadow: inset 1px 1px 2px rgba(255, 255, 255, 0.1),
					inset -1px -1px 2px rgba(0, 0, 0, 0.7), 1px 1px 3px rgba(0, 0, 0, 0.5);
				border: 0.1rem solid ${theme.colors.green};
				width: 100%;
				text-align: center;
				padding: 0.7rem 0;
			}

			div {
				padding: 0.5rem;
				display: flex;
				flex-wrap: wrap;
				gap: 1rem;
			}

			&--img {
				width: 8rem;
				cursor: pointer;
				position: relative;
			}
			&--imgContainer {
				display: flex;
				flex-direction: column;
				position: relative;
			}
		}
	}
	.skill__tooltip {
		position: absolute;
		background-color: ${theme.colors.green};
		color: white;
		box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.2);
		padding: 0.5rem;
		border-radius: 0.5rem;
		z-index: 10;
		top: 90%;
		left: 50%;
		transform: translate(-50%, 0%);
	}
`;

export default Skill;
