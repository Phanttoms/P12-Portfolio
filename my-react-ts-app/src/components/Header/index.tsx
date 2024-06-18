import { Link } from "react-router-dom";
import { useState } from "react";
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
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<HeaderStyle>
			<Link to="/" className="test">
				<img className="header__logo" src={logo} alt="logo du site" />
			</Link>
			<h1 className="header__title">Pruche Yohan</h1>
			<div
				className={`burger-menu ${isMenuOpen ? "open" : ""}`}
				onClick={toggleMenu}
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<nav className={`header__navbar ${isMenuOpen ? "open" : ""}`}>
				<ul>
					<li onClick={() => scrollToSection("section1")}>
						<div>
							<p>Présentation</p>
						</div>
					</li>
					<li onClick={() => scrollToSection("section2")}>
						<div>
							<p>Compétences</p>
						</div>
					</li>
					<li onClick={() => scrollToSection("section3")}>
						<div>
							<p>Mes Projets</p>
						</div>
					</li>
					<li onClick={() => scrollToSection("section4")}>
						<div>
							<p>Contact</p>
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
	width: 100%;
	height: 7rem;
	background-color: ${theme.colors.black};
	position: fixed;
	top: 0;
	left: 0;
	border: 0.1rem solid ${theme.colors.green};
	z-index: 1000;
	padding: 0 1rem;
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
		width: 8rem;
		height: 6.5rem;
	}

	.header__navbar {
		display: flex;
		padding-right: 2rem;
		box-sizing: border-box;
		ul {
			list-style: none;
			display: flex;
			flex-direction: row;
			padding: 0;
			margin: 0;
			gap: 1rem;
			box-sizing: border-box;

			li {
				width: 8.2rem;
				height: 4.2rem;
				background-color: ${theme.colors.green};
				display: flex;
				justify-content: center;
				align-items: center;
				clip-path: polygon(30% 0, 100% 0, 100% 70%, 70% 100%, 0 100%, 0 30%);
				transition: 0.3s ease-in-out;
				box-sizing: border-box;
				cursor: pointer;

				&:hover {
					clip-path: polygon(70% 0, 100% 30%, 100% 100%, 30% 100%, 0 70%, 0 0);
				}

				div {
					width: 8rem;
					height: 4rem;
					background: linear-gradient(145deg, #444, #222);
					display: flex;
					justify-content: center;
					align-items: center;
					clip-path: polygon(30% 0, 100% 0, 100% 70%, 70% 100%, 0 100%, 0 30%);
					transition: 0.3s ease-in-out;
					box-sizing: border-box;
					cursor: pointer;

					&:hover {
						clip-path: polygon(
							70% 0,
							100% 30%,
							100% 100%,
							30% 100%,
							0 70%,
							0 0
						);
					}

					p {
						font-size: 1.2rem;
						cursor: pointer;
					}
				}
			}
		}
	}

	.burger-menu {
		display: none;
		flex-direction: column;
		cursor: pointer;
		margin-right: 1rem;

		span {
			background-color: ${theme.colors.green};
			height: 0.4rem;
			width: 2.5rem;
			margin: 0.4rem;
			transition: 0.3s ease-in-out;
		}
	}

	/* Media Queries for Mobile */
	@media (max-width: 768px) {
		.header__navbar ul {
			display: none;
			flex-direction: column;
			position: absolute;
			top: 6.8rem;
			right: 0;
			background-color: ${theme.colors.black};
			margin: 0;
			border: 0.1rem solid ${theme.colors.green};
			border-top: hidden;
			box-sizing: border-box;
			align-items: flex-end;
			padding: 1rem;
		}

		.burger-menu {
			display: flex;
			position: absolute;
			right: 0;
		}

		.burger-menu.open span:nth-child(1) {
			transform: rotate(45deg) translate(0.5rem, 0.5rem);
		}

		.burger-menu.open span:nth-child(2) {
			opacity: 0;
		}

		.burger-menu.open span:nth-child(3) {
			transform: rotate(-45deg) translate(0.5rem, -0.5rem);
		}

		.header__navbar.open ul {
			display: flex;
		}
	}
`;
