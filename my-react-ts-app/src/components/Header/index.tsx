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
					<li onClick={() => scrollToSection("section1")}>
						<a>Présentation</a>
					</li>
					<li onClick={() => scrollToSection("section2")}>
						<a>Compétence</a>
					</li>
					<li onClick={() => scrollToSection("section3")}>
						<a>Mes Projets</a>
					</li>
					<li onClick={() => scrollToSection("section4")}>
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
	z-index: 1000;
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
				width: 7rem;
				padding: 1rem;
				color: ${theme.colors.purple};
				border-radius: 30% 0%;
				background: linear-gradient(145deg, #444, #222);
				border: 1px solid ${theme.colors.green};
				box-shadow: inset 1px 1px 2px rgba(255, 255, 255, 0.1),
					inset -1px -1px 2px rgba(0, 0, 0, 0.7), 1px 1px 3px rgba(0, 0, 0, 0.5);
				transition: all 0.3s ease;
				cursor: pointer;

				&:hover {
					background: linear-gradient(145deg, #555, #333);
					box-shadow: inset 1px 1px 2px rgba(255, 255, 255, 0.2),
						inset -1px -1px 2px rgba(0, 0, 0, 0.8),
						2px 2px 5px rgba(0, 0, 0, 0.7);
					transform: translateY(-2px);
				}
			}
		}
	}
`;
