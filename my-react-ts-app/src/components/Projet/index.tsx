import styled from "styled-components";
import Card from "../Card";
import img1 from "../../assets/images/projetRidingCities.png";
import img2 from "../../assets/images/projetBooki.png";
import img3 from "../../assets/images/projetOhmyfood.png";
import img4 from "../../assets/images/projetPrintIt.png";

export default function Projet() {
	return (
		<ProjetStyle id="section3">
			<h2 className="projet__title">Mes Projets</h2>
			<hr />
			<div className="projet__container">
				<Card url={img1} title="Riding Cities" />
				<Card url={img2} title="Booki" />
				<Card url={img3} title="Ohmyfood" />
				<Card url={img4} title="Print It" />
			</div>
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
