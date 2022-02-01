import React from "react";
import "./login.scss";

const Login = () => {
	return (
		<div className="login" id="login">
			<h4 className="login-header">Log in</h4>
			<div className="form">
				<form>
					<input
						className="form-input"
						placeholder="Your email"
						name="email"
						type="email"
						id="email"
					/>
					<input
						className="form-input"
						placeholder="Your password"
						name="password"
						type="password"
						id="password"
					/>
					<button className="btn" type="submit">
						LOG IN
					</button>
					<br />
					<br />
					Don't have an account yet? Sign up here!
				</form>
			</div>
		</div>
	);
};

export default Login;
