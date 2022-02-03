import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import "./login.scss";

const Login = (props) => {
	const [userFormData, setUserFormData] = useState({ email: "", password: "" });
	const [login, { error }] = useMutation(LOGIN_USER);

	// update state based on form input changes
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setUserFormData({ ...userFormData, [name]: value });
	};

	// submit form
	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			const { data } = await login({
				variables: { ...userFormData },
			});

			Auth.login(data.login.token);
		} catch (e) {
			console.error(e);
		}

		// clear form values
		setUserFormData({
			email: "",
			password: "",
		});
	};

	return (
		<div className="login" id="login">
			<h4 className="login-header">Log in</h4>
			<div>
				<form className="form" onSubmit={handleFormSubmit}>
					<input
						className="form-input"
						placeholder="Your email"
						name="email"
						type="email"
						id="email"
						value={userFormData.email}
						onChange={handleInputChange}
					/>
					<input
						className="form-input"
						placeholder="Your password"
						name="password"
						type="password"
						id="password"
						value={userFormData.password}
						onChange={handleInputChange}
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
