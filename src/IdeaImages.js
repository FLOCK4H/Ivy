import React from 'react';

const IdeaImages = () => {
  const imageStyle = {
    marginBottom: '-25px', // spacing between images
  };

  const onClickAnimation = (e) => {
    e.target.style.transform = 'scale(1.3)';
    setTimeout(() => {
      e.target.style.transform = 'scale(1.0)';
    }, 300); // Duration after which it scales down
  }

  const onHover = (e, status) => {
    if (status === "over") {
      e.target.style.transform = 'scale(1.2)';
    } else {
      e.target.style.transform = 'scale(1.0)';
    }
  }

  return (
    <div className="idea-images-container">
      <img 
        src="idea_1.png" 
        alt="Idea 1" 
        width="256" 
        height="128" 
        style={imageStyle} 
        onMouseOver={(e) => onHover(e, "over")}
        onMouseLeave={(e) => onHover(e, "leave")}
        onMouseDown={onClickAnimation}
      />
      <img 
        src="idea_2.png" 
        alt="Idea 2" 
        width="256" 
        height="128" 
        style={imageStyle} 
        onMouseOver={(e) => onHover(e, "over")}
        onMouseLeave={(e) => onHover(e, "leave")}
        onMouseDown={onClickAnimation}
      />
      <img 
        src="idea_3.png" 
        alt="Idea 3" 
        width="256" 
        height="128" 
        style={imageStyle} 
        onMouseOver={(e) => onHover(e, "over")}
        onMouseLeave={(e) => onHover(e, "leave")}
        onMouseDown={onClickAnimation}
      />
    </div>
  );
};

export default IdeaImages;