import styled from "styled-components";
import gitHubLogo from "../../assets/images/github-mark-white.png";
import { theme } from "../../assets/style/Theme";

export default function Footer() {
	return (
		<FooterStyle>
			<div className="footer__logo">
				<a href="https://github.com/Phanttoms" target="_blank">
					<img src={gitHubLogo} alt="GitHub Logo" />
				</a>
			</div>
			<div className="footer__text">
				2024 Yohan PRUCHE, site réalisé avec Vite, React, et TypeScript.
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
	background-color: ${theme.colors.black};
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
