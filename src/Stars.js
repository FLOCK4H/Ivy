import React, { useState, useEffect, useRef } from 'react';

const Stars = ({ bubbleRef }) => {
  const [stars, setStars] = useState([]);
  const observerRef = useRef(null);

  const calculateStarPositions = (width, height, maxCount) => {
    const margin = 10;  // Margin to avoid stars at the very edge
    const minDistance = 30; // Minimum distance between stars
    let newStars = [];
    let attempts = 0;

    while (newStars.length < maxCount && attempts < 1000) {
      const x = Math.random() * (width - margin * 2) + margin;
      const y = Math.random() * (height - margin * 2) + margin;
      const position = { left: x, top: y };

      const tooClose = newStars.some(star => {
        const dx = star.left - position.left;
        const dy = star.top - position.top;
        return Math.sqrt(dx * dx + dy * dy) < minDistance;
      });

      if (!tooClose) {
        newStars.push(position);
      }

      attempts++;
    }

    return newStars;
  };

  useEffect(() => {
    const currentBubble = bubbleRef.current;

    if (currentBubble) {
      const bubbleWidth = currentBubble.offsetWidth;
      const bubbleHeight = currentBubble.offsetHeight;

      const area = bubbleWidth * bubbleHeight;
      const starArea = 1000;
      const maxCount = Math.min(Math.floor(area / starArea), 15);

      setStars(calculateStarPositions(bubbleWidth, bubbleHeight, maxCount));

      observerRef.current = new ResizeObserver(() => {
        const resizedWidth = currentBubble.offsetWidth;
        const resizedHeight = currentBubble.offsetHeight;
        const resizedMaxCount = Math.min(Math.floor((resizedWidth * resizedHeight) / starArea), 15);
        setStars(calculateStarPositions(resizedWidth, resizedHeight, resizedMaxCount));
      });

      observerRef.current.observe(currentBubble);
    }

    return () => {
      if (observerRef.current && currentBubble) {
        observerRef.current.unobserve(currentBubble);
      }
    };
  }, [bubbleRef]);

  return (
    <>
      {stars.map((star, index) => (
        <img 
          key={index}
          src='star.png'
          className="star"
          alt=""
          onContextMenu={(e) => e.preventDefault()}
          draggable={false}
          style={{ 
            position: 'absolute',
            left: `${star.left}px`,
            top: `${star.top}px`,
            width: '12px',
            height: '12px',
            opacity: 0.7,
            transition: 'left 0.5s, top 0.5s',  // Smooth transition for movement
            z_index: -1
          }}
        />
      ))}
    </>
  );
};

export default Stars;