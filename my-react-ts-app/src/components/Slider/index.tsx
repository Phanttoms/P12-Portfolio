import { useEffect, useRef, useState } from "react";
import chien1 from "../../assets/images/chien1.webp";
import chien2 from "../../assets/images/chien2.webp";
import chien3 from "../../assets/images/chien3.jpg";
import styled from "styled-components";

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
		>
			<button className="slider__arrow slider__arrow--left" onClick={prevSlide}>
				&#10094;
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
				&#10095;
			</button>
		</SliderStyle>
	);
}

const SliderStyle = styled.section`
	width: 100%;
	height: 30rem;
	display: flex;
	justify-content: center;
	.slider__container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: auto;
		width: 60%;
		&__imgBox {
			width: 100%;
			&--img {
				width: 100%;
				height: 30rem;
				object-fit: cover;
			}
		}
	}
	.slider__arrow {
		position: relative;
		top: 55%;
		transform: translateY(-50%);
		background: transparent;
		border: none;
		font-size: 24px;
		cursor: pointer;
	}
	.slider__arrow--left {
		left: -2%;
	}
	.slider__arrow--right {
		right: -2%;
	}
`;
