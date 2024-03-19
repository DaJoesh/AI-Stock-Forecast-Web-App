import React from "react";
import "../styles/Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body card-custom-body">
                <h1 className="card-title text-light">
                  Welcome to the AI Stock Forecaster
                </h1>
                <p className="card-text text-light">
                  The AI Stock Forecaster uses an LSTM (Long Short-Term Memory)
                  Neural Network to predict stock prices. Sign in to get
                  started.
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
