import { Link } from "react-router-dom";
import styled from "styled-components";

const scrollToSection = (id: string) => {
	const element = document.getElementById(id);
	if (element) {
		element.scrollIntoView({ behavior: "smooth" });
	}
};

export default function Header() {
	return (
		<HeaderStyle>
			<Link to="/">
				<h1 className="header__logo">Pruche Yohan</h1>
			</Link>
			<nav className="header__navbar">
				<ul>
					<li>
						<a onClick={() => scrollToSection("section1")}>Présentation</a>
					</li>
					<li>
						<a onClick={() => scrollToSection("section2")}>Compétence</a>
					</li>
					<li>
						<a>Mes Projets</a>
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
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 5rem;
	overflow: hidden;
	.header__logo {
	}
	.header__navbar {
		ul {
			list-style: none;
			display: flex;
			flex-direction: row;
			width: 100%;
			justify-content: space-between;
			padding: 2rem;
			box-sizing: border-box;
			li {
				padding: 1rem;
				border: 0.1rem solid black;
			}
		}
	}
`;
