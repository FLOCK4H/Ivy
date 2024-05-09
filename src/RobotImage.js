import React from 'react';

const RobotImage = () => {

  const onHover = (e) => {
      e.target.style.transform = 'scale(1.1)'
      e.target.style.opacity = '0.8'
  }

  const offHover = (e) => {
    e.target.style.transform = 'scale(1.0)'
    e.target.style.opacity = '0.9'
  }

  return (
    <div className="robot-image-container">
      <img 
        src="try_these_ideas.png"
        alt="Robot with ideas"
        width="512px"
        height="512px"
        style={{"opacity": 0.9}}
        onMouseEnter={onHover}
        onMouseLeave={offHover}
      />
    </div>
  );
};

export default RobotImage;