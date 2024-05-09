import React, { useState } from 'react';

const LogoImage = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const animationDuration = 200;

  const handleLogoClick = () => {
    if (!isAnimating) {
      setIsAnimating(true); // start
      document.querySelector('.logo-animate').style.transform = 'scale(1.2)';

      setTimeout(() => {
        document.querySelector('.logo-animate').style.transform = 'scale(1)';
        setIsAnimating(false); // end
      }, animationDuration);
    }
  };

  const handleMouseOver = (e) => {
    e.target.style.transform = 'scale(1.1)';
  };

  const handleMouseOut = (e) => {
    e.target.style.transform = 'scale(1)';
  };

  return (
    <div className="image-container">
      <img 
        src="ivy_logo.png"
        alt="Ivy Logo"
        className="logo-animate"
        width="256px" 
        height="256px" 
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleLogoClick}
      />
    </div>
  );
};

export default LogoImage;