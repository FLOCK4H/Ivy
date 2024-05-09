import React from 'react';
import Stars from './Stars';
import TypingText from './TypingText';
import ProfileImage from './ProfileImage';

const AIBubble = ({ isActive, onClick, text, bubbleRef }) => {
    const bubbleStyle = {
      maxWidth: '500px', // Set a max-width that fits your layout
      maxHeight: '100rem'
    };
  
    return (
      <div ref={bubbleRef} className={`bubble ${isActive ? 'active' : ''}`} onClick={onClick} style={bubbleStyle}>
        <Stars count={15} bubbleRef={bubbleRef} />
        <TypingText text={text} startDelay={1} />
        <ProfileImage imageName="ivy_profile.png" className="ai-profile-image-container" />      
      </div>
    );
  };

export default AIBubble;