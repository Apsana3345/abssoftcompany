import React, { useEffect, useState } from "react";
import "./Cursor.css";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailingPosition, setTrailingPosition] = useState({ x: -100, y: -100 }); // Start farther away

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let animationFrame;

    const moveTrail = () => {
      setTrailingPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.05, // Smaller value = Slower catch-up
        y: prev.y + (position.y - prev.y) * 0.05,
      }));

      animationFrame = requestAnimationFrame(moveTrail);
    };

    moveTrail();

    return () => cancelAnimationFrame(animationFrame);
  }, [position]);

  return (
    <>
      {/* Small cursor (moves instantly) */}
      <div
        className="cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      {/* Big cursor (follows from a distance) */}
      <div
        className="cursor-ring"
        style={{
          left: `${trailingPosition.x}px`,
          top: `${trailingPosition.y}px`,
        }}
      />
    </>
  );
};

export default Cursor;
