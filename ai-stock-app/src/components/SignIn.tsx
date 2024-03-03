import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/SignIn.css";

const SignIn: React.FC = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Perform sign-in logic here

    // Navigate to the Forecast page
    navigate("/forecast");
  };

  return (
    <div className="signin-container">
      <h1>Sign in</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSignIn}
        >
          Sign In
        </button>
        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
