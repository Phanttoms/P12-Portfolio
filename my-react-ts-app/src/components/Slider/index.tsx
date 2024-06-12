import { useEffect, useRef, useState } from "react";
import chien1 from "../../assets/images/slider1.png";
import chien2 from "../../assets/images/slider2.png";
import chien3 from "../../assets/images/slider3.png";
import styled from "styled-components";
import { theme } from "../../assets/style/Theme";

interface Slide {
	imageUrl: string;
}

export default function Slider() {
	const slides: Slide[] = [
		{ imageUrl: chien1 },
		{ imageUrl: chien2 },
		{ imageUrl: chien3 },
	];

	const [currentIndex, setCurrentIndex] = useState(0);
	const [isHovered, setIsHovered] = useState(false);
	const intervalRef = useRef<number>();

	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex >= slides.length - 1 ? 0 : prevIndex + 1
		);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex <= 0 ? slides.length - 1 : prevIndex - 1
		);
	};

	useEffect(() => {
		if (!isHovered) {
			intervalRef.current = window.setInterval(nextSlide, 5000);
		}
		return () => clearInterval(intervalRef.current);
	}, [currentIndex, isHovered]);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<SliderStyle
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			id="section2"
		>
			<h2 className="slider__title">Compétence</h2>
			<hr />
			<div className="slider">
				<button
					className="slider__arrow slider__arrow--left"
					onClick={prevSlide}
				>
					{"<"}
				</button>
				<div className="slider__container">
					{slides.map((slide, index) => (
						<div
							className="slider__container__imgBox"
							key={index}
							style={{ display: index === currentIndex ? "block" : "none" }}
						>
							<img
								className="slider__container__imgBox--img"
								src={slide.imageUrl}
								alt={`Slide ${index + 1}`}
							/>
						</div>
					))}
				</div>
				<button
					className="slider__arrow slider__arrow--right"
					onClick={nextSlide}
				>
					{">"}
				</button>
			</div>
		</SliderStyle>
	);
}

const SliderStyle = styled.section`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${theme.colors.grey};
	padding: 2rem 0;
	.slider {
		display: flex;
		justify-content: center;
		align-items: center;
		height: auto;
		width: 60rem;
	}
	.slider__container {
		width: 100%;
		height: 34.2rem;
		&__imgBox {
			width: 100%;
			height: auto;
			&--img {
				width: 100%;
				height: auto;
				object-fit: contain;
			}
		}
	}
	.slider__arrow {
		position: relative;
		height: 34.2rem;
		width: 5rem;
		border: none;
		font-size: 24px;
		cursor: pointer;
		color: ${theme.colors.purple};
		background: linear-gradient(145deg, #444, #222);
		border: 1px solid ${theme.colors.green};
		box-shadow: inset 1px 1px 2px rgba(255, 255, 255, 0.1),
			inset -1px -1px 2px rgba(0, 0, 0, 0.7), 1px 1px 3px rgba(0, 0, 0, 0.5);
		transition: all 0.3s ease;

		&:hover {
			background: linear-gradient(145deg, #555, #333);
			box-shadow: inset 1px 1px 2px rgba(255, 255, 255, 0.2),
				inset -1px -1px 2px rgba(0, 0, 0, 0.8), 2px 2px 5px rgba(0, 0, 0, 0.7);
			transform: translateY(-2px);
		}
	}
	.slider__arrow--left {
		left: 0%;
		border-radius: 50% 0 0 50%;
	}
	.slider__arrow--right {
		right: 0%;
		border-radius: 0 50% 50% 0;
	}
`;
