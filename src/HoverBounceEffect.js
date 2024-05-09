import React, { useState } from 'react';

const HoverBounceEffect = ({ children, scale = 1.1, bounceDirection = 'none' }) => {
  const [hovering, setHovering] = useState(false);

  const getTransformOrigin = () => {
    switch (bounceDirection) {
      case 'left':
        return 'left center';
      case 'right':
        return 'right center';
      case 'none':
      default:
        return '';
    }
  };

  const style = {
    transition: 'transform 0.3s',
    transform: hovering ? `scale(${scale})` : 'scale(1)',
    transformOrigin: getTransformOrigin(),
  };

  return (
    <div 
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      style={style}
    >
      {children}
    </div>
  );
};

export default HoverBounceEffect;
