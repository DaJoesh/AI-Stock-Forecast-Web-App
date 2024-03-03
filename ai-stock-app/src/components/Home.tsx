import React from "react";
import "../styles/Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title">Welcome to My Website</h1>
                <p className="card-text">
                  Thank you for visiting! This is the home page of my website.
                  Feel free to explore and discover interesting content.
                </p>
                <a href="/signin" className="btn btn-primary">
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
