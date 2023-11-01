
import React, { useEffect } from 'react';
import './App.css';  // Importing the CSS for the canvas

const MatrixBackground = () => {
  useEffect(() => {
    var c = document.getElementById("matrixCanvas");
    var ctx = c.getContext("2d");

    // Make the canvas full screen
    c.height = window.innerHeight;
    c.width = window.innerWidth;

    // Set the characters
    var matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
    matrixChars = matrixChars.split("");

    // Initialize an array for column positions
    var colPos = Array(Math.floor(c.width / 10)).fill(0);

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, c.width, c.height);

      ctx.fillStyle = "#0F0";
      ctx.font = "10px Arial";

      for (let i = 0; i < colPos.length; i++) {
        let text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        ctx.fillText(text, i * 10, colPos[i]);

        if (colPos[i] * 10 > c.height && Math.random() > 0.975) {
          colPos[i] = 0;
        }
        colPos[i] += 10;
      }
    }

    var interval = setInterval(draw, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <canvas id="matrixCanvas" className="matrix-canvas"></canvas>
  );
};

export default MatrixBackground;
