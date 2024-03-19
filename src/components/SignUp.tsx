import React from "react";
import { Link } from "react-router-dom";
import "../styles/SignUp.css";

const SignUp: React.FC = () => {
  return (
    <div className="signup-container">
      <h1>Create an Account</h1>
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
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
      <p className="login-link">
        Already have an account? <Link to="/signin">Login here</Link>
      </p>
    </div>
  );
};

export default SignUp;
