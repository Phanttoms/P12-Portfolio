import styled from "styled-components";
import { ChangeEvent, useEffect, useState } from "react";
import { theme } from "../../assets/style/Theme";
import { useForm } from "@formspree/react";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [state, handleSubmit, reset] = useForm("mwkggrdy");

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	useEffect(() => {
		if (state.succeeded) {
			alert("Votre message a été envoyé avec succès!");
			setFormData({
				name: "",
				email: "",
				message: "",
			});
			reset();
		}
	}, [state.succeeded, reset]);

	return (
		<ContactStyle id="section4">
			<h2>Contact</h2>
			<hr />
			<form
				onSubmit={handleSubmit}
				className="form"
				action="https://formspree.io/f/mwkggrdy"
				method="POST"
			>
				<div className="form__content">
					<label htmlFor="name" className="form__content--title">
						Nom: (obligatoire)
					</label>
					<input
						className="form__content--input"
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form__content">
					<label htmlFor="email" className="form__content--title">
						Email: (obligatoire)
					</label>
					<input
						className="form__content--input"
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form__content">
					<label htmlFor="message" className="form__content--title">
						Message: (obligatoire)
					</label>
					<textarea
						className="form__content--input"
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						required
					></textarea>
				</div>
				<button
					type="submit"
					className="form__submitButton"
					disabled={state.submitting}
				>
					<p>Envoyer</p>
				</button>
			</form>
		</ContactStyle>
	);
}

const ContactStyle = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2rem 0;

	.form {
		display: flex;
		flex-direction: column;
		min-width: 35%;
		gap: 1rem;
		background: linear-gradient(145deg, #444, #222);
		padding: 2rem;
		border-radius: 1rem;
		margin: auto;
		color: ${theme.colors.green};
		border: 0.1rem solid ${theme.colors.green};
		box-shadow: inset 1px 1px 2px rgba(255, 255, 255, 0.1),
			inset -1px -1px 2px rgba(0, 0, 0, 0.7), 1px 1px 3px rgba(0, 0, 0, 0.5);
		&__content {
			display: flex;
			flex-direction: column;
			&--title {
				margin-bottom: 0.5rem;
				font-size: 1.2rem;
			}
			&--input {
				padding: 1rem;
				border: none;
				border-radius: 0.5rem;
			}
		}
		&__submitButton {
			width: 15.3rem;
			height: 3.3rem;
			border: none;
			background: ${theme.colors.green};
			cursor: pointer;
			align-self: center;
			display: flex;
			justify-content: center;
			align-items: center;
			transition: 0.3s ease-in-out;
			border: 0.2rem solid ${theme.colors.purple};
			color: white;
			&:hover {
				box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.5),
					inset -2px -2px 4px rgba(0, 0, 0, 0.5), 2px 2px 5px rgba(0, 0, 0, 0.3),
					-2px -2px 5px rgba(255, 255, 255, 0.3);
				transform: scale(1.05); /* Augmentez légèrement la taille du bouton */
			}
			p {
				font-size: 1.2rem;
			}
		}
	}
`;
