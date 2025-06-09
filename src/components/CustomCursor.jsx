import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timeoutId;

    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      // Remove 'moving' state after 100ms of no movement for smooth scale effect
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsMoving(false), 100);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      className={`
        fixed w-6 h-6 bg-[#a67c52] rounded-full pointer-events-none mix-blend-difference
        z-50 transform -translate-x-1/2 -translate-y-1/2
        transition-transform duration-150 ease-out
        ${isMoving ? 'scale-125' : 'scale-100'}
      `}
    ></div>
  );
};

export default CustomCursor;
