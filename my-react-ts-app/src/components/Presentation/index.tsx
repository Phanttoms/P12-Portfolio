import styled from "styled-components";

export default function Presentation() {
	return (
		<PresentationStyle id="section1">
			<h2 className="presentation__title">Présentation</h2>
			<hr />
			<div className="presentation__content">
				<p className="presentation__content--text">
					ceci est l'endroit où il va y avoir du text pour expliquer <br /> des
					trucs blablabla blabla bla bla blablablabla
					<br /> bla blablba bla blabla bla bla blablablabla bla blablba bla
					blabla bla bla blablablabla <br /> bla blablba bla blabla bla bla
					blablablabla bla blablba bla
				</p>
			</div>
		</PresentationStyle>
	);
}

const PresentationStyle = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
	.presentation__title {
	}
	.presentation__content {
		&--text {
			text-align: center;
		}
	}
`;
