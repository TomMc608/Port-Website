
import React from 'react';
import MatrixBackground from './MatrixBackground';  // Import the new component

const MyProjects = () => {
  return (
    <div style={{ color: 'white', zIndex: '3' }}>  {/* Make text white, set z-index to 2 */}
      <MatrixBackground />  {/* Include the Matrix background */}
      <h1>My Projects</h1>
      <p>This is the My Projects page.</p>
    </div>
  );
};

export default MyProjects;
