return (
  <div className="signup" id="signup">
    <h4 className="signup-header">Sign Up</h4>
    <div>
      <form onSubmit={handleFormSubmit} className="form">
        <input
          className="form-input"
          placeholder="Your username"
          name="username"
          type="username"
          id="username"
          value={formState.username}
          onChange={handleChange}
        />
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
          SIGN UP
        </button>