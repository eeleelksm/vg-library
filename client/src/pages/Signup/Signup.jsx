// import React, { useState } from "react";
// import { useMutation } from "@apollo/client";
// import { ADD_USER } from "../../utils/mutations";
// import Auth from "../../utils/auth";
import "./signup.scss";

const Signup = () => {
	// const [formState, setFormState] = useState({
	// 	username: "",
	// 	email: "",
	// 	password: "",
	// });

	// // update state based on the form input
	// const handleChange = (event) => {
	// 	const { name, value } = event.target;

	// 	setFormState({
	// 		...formState,
	// 		[name]: value,
	// 	});
	// };

	// const [addUser, { error }] = useMutation(ADD_USER);

	// // submit form
	// const handleFormSubmit = async (event) => {
	// 	event.preventDefault();

	// 	// use try/catch instead of promises to handle errors
	// 	try {
	// 		// execute addUser mutation and pass in variable data from form
	// 		const { data } = await addUser({
	// 			variables: { ...formState },
	// 		});
	// 		Auth.login(data.addUser.token);
	// 	} catch (e) {
	// 		console.error(e);
	// 	}
	// };

	return (
		<div className="signup" id="signup">
			<h4 className="signup-header">Sign Up</h4>
			<div>
				<form className="form">
					{/* onSubmit={handleFormSubmit} */}
					<input
						className="form-input"
						placeholder="Your username"
						name="username"
						type="username"
						id="username"
						// value={formState.username}
						// onChange={handleChange}
					/>
					<input
						className="form-input"
						placeholder="Your email"
						name="email"
						type="email"
						id="email"
						// value={formState.email}
						// onChange={handleChange}
					/>
					<input
						className="form-input"
						placeholder="Your password"
						name="password"
						type="password"
						id="password"
						// value={formState.password}
						// onChange={handleChange}
					/>
					<button className="btn" type="submit">
						SIGN UP
					</button>
					<br />
					<br />
					Have an account already? Log In here!
				</form>
				{/* {error && <div className="error">Sign up failed. Please try again!</div>} */}
			</div>
		</div>
	);
};

export default Signup;
