import React from 'react';

const AboutMe = () => {
  const sectionStyle = {
    margin: "20px 0",
  };

  const headerStyle = {
    borderBottom: "2px solid #007bff",
    paddingBottom: "10px",
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={headerStyle}>About Me</h1>

      <section style={sectionStyle}>
        <h2>Biography</h2>
        <p>
          [Your biography here]
        </p>
      </section>

      <section style={sectionStyle}>
        <h2>Skills</h2>
        <ul>
          <li>Python Programming</li>
          <li>AI and Machine Learning</li>
          <li>Data Analysis</li>
          {/* Add more skills here */}
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2>Experience</h2>
        <p>
          [Describe your experience here]
        </p>
      </section>
    </div>
  );
};

export default AboutMe;
