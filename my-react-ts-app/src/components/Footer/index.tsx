import styled from "styled-components";
import gitHubLogo from "../../assets/images/github-mark-white.png";

export default function Footer() {
	return (
		<FooterStyle>
			<div className="footer__logo">
				<a href="https://github.com/Phanttoms" target="_blank">
					<img src={gitHubLogo} alt="GitHub Logo" />
				</a>
			</div>
			<div className="footer__text">
				2024 Yohan PRUCHE, Tous droits rèservés.
			</div>
		</FooterStyle>
	);
}

const FooterStyle = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 1rem;
	background-color: black;
	height: 10rem;
	width: 100%;
	.footer__logo {
		a {
			img {
				width: 2rem;
			}
		}
	}
	.footer__text {
		color: white;
	}
`;
