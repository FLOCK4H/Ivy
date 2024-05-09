import React, { useState } from 'react';

const HoverOpacityEffect = ({ children, hoverOpacity = 0.5, hoverShadow = '0 5px 15px rgba(0,0,0,0.01)' }) => {
  const [hovering, setHovering] = useState(false);

  const style = {
    transition: 'opacity 0.3s, box-shadow 0.3s',
    opacity: hovering ? hoverOpacity : 1,
    boxShadow: hovering ? hoverShadow : 'none'
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

export default HoverOpacityEffect;