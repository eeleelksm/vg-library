import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import "./login.scss";

const Login = () => {
	const [formState, setFormState] = useState({ email: "", password: "" });
	const [login, { error }] = useMutation(LOGIN_USER);

	// update state based on form input changes
	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	// submit form
	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			const { data } = await login({
				variables: { ...formState },
			});

			Auth.login(data.login.token);
		} catch (e) {
			console.error(e);
		}

		// clear form values
		setFormState({
			email: "",
			password: "",
		});
	};

	return (
		<div className="login" id="login">
			<h4 className="login-header">Log in</h4>
			<div className="form">
				<form onSubmit={handleFormSubmit}>
					<input
						className="form-input"
						placeholder="Your email"
						name="email"
						type="email"
						id="email"
						value={formState.email}
						onChange={handleChange}
					/>
					<input
						className="form-input"
						placeholder="Your password"
						name="password"
						type="password"
						id="password"
						value={formState.password}
						onChange={handleChange}
					/>
					<button className="btn" type="submit">
						LOG IN
					</button>
					<br />
					<br />
					Don't have an account yet? Sign up here!
				</form>
				{error && <div className="error">Login failed. Please try again!</div>}
			</div>
		</div>
	);
};

export default Login;
