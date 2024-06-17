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

export default function Skill() {
	return (
		<SkillStyle id="section2">
			<h2>Compétences</h2>
			<hr />
			<div className="skill__container">
				<div className="skill__container__content">
					<h3 className="skill__container__content--title">Front-End</h3>
					<div>
						<img src={front1} className="skill__container__content--img" />
						<img src={front2} className="skill__container__content--img" />
						<img src={front3} className="skill__container__content--img" />
						<img src={front4} className="skill__container__content--img" />
						<img src={front5} className="skill__container__content--img" />
						<img src={front6} className="skill__container__content--img" />
					</div>
				</div>
				<div className="skill__container__content">
					<h3 className="skill__container__content--title">Back-End</h3>
					<div>
						<img src={back1} className="skill__container__content--img" />
						<img src={back2} className="skill__container__content--img" />
						<img src={back3} className="skill__container__content--img" />
					</div>
				</div>
				<div className="skill__container__content">
					<h3 className="skill__container__content--title">
						Outils et services
					</h3>
					<div>
						<img src={tool1} className="skill__container__content--img" />
						<img src={tool2} className="skill__container__content--img" />
						<img src={tool3} className="skill__container__content--img" />
						<img src={tool4} className="skill__container__content--img" />
						<img src={tool5} className="skill__container__content--img" />
						<img src={tool6} className="skill__container__content--img" />
					</div>
				</div>
			</div>
		</SkillStyle>
	);
}

const SkillStyle = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem 0;
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
			}
		}
	}
`;
