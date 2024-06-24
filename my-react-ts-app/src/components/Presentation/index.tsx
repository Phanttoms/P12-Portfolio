import styled from "styled-components";
// import { theme } from "../../assets/style/Theme";
import test1 from "../../assets/images/background1.jpg";

export default function Presentation() {
	return (
		<PresentationStyle id="section1">
			<div className="presentation">
				<h2 className="presentation__title">Présentation</h2>
				<hr />
				<div className="presentation__content">
					<p className="presentation__content--text">
						Je suis un jeune développeur web passionné par le web et l'
						<strong>informatique</strong>.<br />
						Ma fascination pour le monde numérique m'a poussé à explorer
						diverses technologies et à développer des compétences solides dans
						la création de sites et d'applications web.
						<br />
						<br />
						Toujours <strong>curieux</strong> et avide d'
						<strong>apprendre</strong>, je suis déterminé à{" "}
						<strong>innover</strong> et à apporter des solutions{" "}
						<strong>efficaces</strong> et <strong>créatives</strong> dans chaque
						projet que j'entreprends.
						<br />
						<br />À travers mes expériences, j'ai acquis une solide expertise
						dans des technologies telles que <strong>HTML</strong>,{" "}
						<strong>CSS</strong>, <strong>JavaScript</strong> ainsi que des
						frameworks comme <strong>React</strong>.<br />
						<br />
						Je suis constamment en train d'explorer de{" "}
						<strong>nouvelles technologies</strong> pour rester à la{" "}
						<strong>pointe</strong> de mon domaine.
					</p>
				</div>
			</div>
		</PresentationStyle>
	);
}

const PresentationStyle = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-image: url(${test1});
	background-size: cover;
	background-repeat: no-repeat;
	padding: 8rem 0;
	.presentation {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 2rem;
		padding: 2rem 4rem 4rem 4rem;
		border-radius: 1rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		background: rgba(255, 255, 255, 0.748);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.3);
		&__content {
			&--text {
				text-align: center;
			}
		}
	}
`;
