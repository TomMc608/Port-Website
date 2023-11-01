import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import MyProjects from './pages/MyProjects';
import MatrixBackground from './pages/MatrixBackground';  // Make sure this import is correct

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
      <div className="App" style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <MatrixBackground />  {/* Place MatrixBackground here */}
        <nav style={{ position: 'absolute', top: '0', left: '0', zIndex: '2' }}>
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
