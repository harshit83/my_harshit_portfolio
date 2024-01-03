import React, { useEffect, useRef } from 'react';

const CanvasBackground = () => {
  const canvasRef = useRef(null);
  const numberOfStars = 100;
  let stars = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize canvas size
    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);

    // Initialize stars
    for (let i = 0; i < numberOfStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.7,
        velocity: Math.random() * 1
      });
    }

    // Update stars position and redraw
    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        star.x += star.velocity;
        
        // Reset star position if it moves out of the canvas
        if (star.x > canvas.width) {
          star.x = 0;
          star.y = Math.random() * canvas.height;
        }
      });

      requestAnimationFrame(update);
    };

    update();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  });

  return <canvas ref={canvasRef} className='canvas-background' />;
};

export default CanvasBackground;
