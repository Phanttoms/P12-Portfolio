import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/logoSite.png";
import { theme } from "../../assets/style/Theme";

const scrollToSection = (id: string) => {
	const element = document.getElementById(id);
	if (element) {
		const headerHeight = document.querySelector("header")?.clientHeight || 0;
		const offset = headerHeight > 0 ? -headerHeight : 0;

		window.scrollTo({
			top: element.offsetTop + offset,
			behavior: "smooth",
		});
	}
};

export default function Header() {
	return (
		<HeaderStyle>
			<Link to="/" className="test">
				<img className="header__logo" src={logo} alt="logo du site" />
			</Link>
			<h1 className="header__title">Pruche Yohan</h1>
			<nav className="header__navbar">
				<ul>
					<li>
						<a onClick={() => scrollToSection("section1")}>Présentation</a>
					</li>
					<li>
						<a onClick={() => scrollToSection("section2")}>Compétence</a>
					</li>
					<li>
						<a onClick={() => scrollToSection("section3")}>Mes Projets</a>
					</li>
					<li>
						<a>Contact</a>
					</li>
				</ul>
			</nav>
		</HeaderStyle>
	);
}

const HeaderStyle = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	width: 100%;
	height: 6rem;
	overflow: hidden;
	background-color: ${theme.colors.black};
	position: fixed;
	top: 0;
	left: 0;
	border: 0.1rem solid ${theme.colors.green};
	box-sizing: border-box;

	.header__title {
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		padding: 0;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		border: 0;
	}
	.header__logo {
		width: 7rem;
		height: 6rem;
	}
	.header__navbar {
		ul {
			list-style: none;
			display: flex;
			flex-direction: row;
			width: 100%;
			justify-content: space-between;
			padding-right: 2rem;
			box-sizing: border-box;
			li {
				background-color: ${theme.colors.black};
				border: 0.1rem solid ${theme.colors.green};
				width: 7rem;
				padding: 1rem;
				color: ${theme.colors.purple};
				border-radius: 30% 0%;
			}
		}
	}
`;
