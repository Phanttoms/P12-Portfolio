import styled from "styled-components";

export default function Projet() {
	return (
		<ProjetStyle id="section3">
			<h2 className="projet__title">Mes Projets</h2>
			<div className="projet__container">
				<div className="projet__container__card">
					<p>carte 1</p>
				</div>
				<div className="projet__container__card">
					<p>carte 2</p>
				</div>
				<div className="projet__container__card">
					<p>carte 3</p>
				</div>
				<div className="projet__container__card">
					<p>carte 4</p>
				</div>
			</div>
		</ProjetStyle>
	);
}

const ProjetStyle = styled.section`
	background-color: red;
	display: flex;
	flex-direction: column;
	align-items: center;
	.projet__title {
	}
	.projet__container {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		&__card {
			width: 20rem;
			height: 20rem;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: blue;
		}
	}
`;
