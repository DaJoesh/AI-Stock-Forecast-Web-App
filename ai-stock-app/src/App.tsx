import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Forecast from "./components/Forecast";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-dark">
          <div className="container">
            <span className="navbar-brand">Your Website Name</span>
          </div>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forecast" element={<Forecast />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
