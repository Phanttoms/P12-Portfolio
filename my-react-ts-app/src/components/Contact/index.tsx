import styled from "styled-components";
import { ChangeEvent, FormEvent, useState } from "react";
import { theme } from "../../assets/style/Theme";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<ContactStyle id="section4">
			<h2>Contact</h2>
			<hr />
			<form onSubmit={handleSubmit} className="form">
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
				<button type="submit" className="form__submitButton">
					Envoyer
				</button>
			</form>
		</ContactStyle>
	);
}

const ContactStyle = styled.section`
	background-color: ${theme.colors.grey};
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
			}
			&--input {
				padding: 1rem;
				border: none;
				border-radius: 0.5rem;
			}
		}
		&__submitButton {
			width: 15rem;
			padding: 1rem;
			border: none;
			border-radius: 0.5rem;
			background: linear-gradient(
				145deg,
				#00bf63,
				#008000
			); /* Gradient for metallic effect */
			color: ${theme.colors.black};
			cursor: pointer;
			font-size: 1.2rem;
			align-self: center;
			box-shadow: inset 1px 1px 2px rgba(255, 255, 255, 0.1),
				inset -1px -1px 2px rgba(0, 0, 0, 0.7), 1px 1px 3px rgba(0, 0, 0, 0.5);
			transition: all 0.3s ease;

			&:hover {
				background: linear-gradient(
					145deg,
					#00bf63,
					#006600
				); /* Slightly brighter on hover */
				box-shadow: inset 1px 1px 2px rgba(255, 255, 255, 0.2),
					inset -1px -1px 2px rgba(0, 0, 0, 0.8), 2px 2px 5px rgba(0, 0, 0, 0.7);
			}
		}
	}
`;
