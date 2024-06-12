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
						Nom
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
						Email
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
						Message
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
		gap: 1rem;
		background-color: ${theme.colors.black};
		padding: 2rem;
		border-radius: 1rem;
		margin: auto;
		color: ${theme.colors.green};
		border: 0.1rem solid ${theme.colors.green};
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
			background-color: ${theme.colors.green};
			cursor: pointer;
			font-size: 1.2rem;
			align-self: center;
			&:hover {
				background-color: lightgreen;
			}
		}
	}
`;
