import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AboutMe from './AboutMe';
import MyProjects from './MyProjects';

const buttonStyle = {
  padding: "10px 20px",
  margin: "0 10px",
  borderRadius: "4px",
  background: "#007bff",
  color: "white",
  textDecoration: "none",
};

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/" style={buttonStyle}>Home</Link>
          <Link to="/about-me" style={buttonStyle}>About Me</Link>
          <Link to="/my-projects" style={buttonStyle}>My Projects</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/my-projects" element={<MyProjects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
