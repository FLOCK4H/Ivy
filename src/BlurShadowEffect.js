import React from 'react';

const BlurShadowEffect = ({ children, shadowColor = 'rgba(0, 0, 0, 0.5)', blurRadius = '10px', borderRadius = '0px' }) => {
  const style = {
    boxShadow: `0 0 ${blurRadius} ${shadowColor}`,
    borderRadius: borderRadius, // Added border radius property
    transition: 'box-shadow 0.3s, border-radius 0.3s'
  };

  return (
    <div style={style}>
      {children}
    </div>
  );
};

export default BlurShadowEffect;