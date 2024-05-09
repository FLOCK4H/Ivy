import React from 'react';

const OnClickBounce = ({ children, scale = 1.1, dur = 500 }) => {

  const onClickAnimation = (e) => {
    e.target.style.transform = `scale(${scale})`;
    setTimeout(() => {
      e.target.style.transform = 'scale(1.0)';
    }, dur); // Duration after which it scales down
  }

  return (
    <div 
      onMouseDown={onClickAnimation}
    >
      {children}
    </div>
  );
};

export default OnClickBounce;