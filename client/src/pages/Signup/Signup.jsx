import "./signup.scss";

function Signup() {
	return (
		<div className="signup" id="signup">
			<h4 className="signup-header">Sign Up</h4>
			<div className="form">
				<form>
					<input
						className="form-input"
						placeholder="Your username"
						name="username"
						type="username"
						id="username"
					/>
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
						SIGN UP
					</button>
					<br />
					<br />
					Have an account already? Log In here!
				</form>
			</div>
		</div>
	);
}

export default Signup;
