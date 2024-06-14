import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/logos/logoSite.png";
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
						<div>
							<a>Présentation</a>
						</div>
					</li>
					<li onClick={() => scrollToSection("section2")}>
						<div>
							<a>Compétences</a>
						</div>
					</li>
					<li onClick={() => scrollToSection("section3")}>
						<div>
							<a>Mes Projets</a>
						</div>
					</li>
					<li onClick={() => scrollToSection("section4")}>
						<div>
							<a>Contact</a>
						</div>
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
			gap: 1rem;
			li {
				width: 7.2rem;
				height: 3.2rem;
				background-color: ${theme.colors.green};
				display: flex;
				justify-content: center;
				align-items: center;
				clip-path: polygon(30% 0, 100% 0, 100% 70%, 70% 100%, 0 100%, 0 30%);
				transition: 0.3s ease-in-out;
				&:hover {
					/* transform: scale(1.1); */
					clip-path: polygon(70% 0, 100% 30%, 100% 100%, 30% 100%, 0 70%, 0 0);
				}
				div {
					width: 7rem;
					height: 3rem;
					background: linear-gradient(145deg, #444, #222);
					display: flex;
					justify-content: center;
					align-items: center;
					clip-path: polygon(30% 0, 100% 0, 100% 70%, 70% 100%, 0 100%, 0 30%);
					transition: 0.3s ease-in-out;
					&:hover {
						/* transform: scale(1.1); */
						clip-path: polygon(
							70% 0,
							100% 30%,
							100% 100%,
							30% 100%,
							0 70%,
							0 0
						);
					}
				}
			}
		}
	}
`;
