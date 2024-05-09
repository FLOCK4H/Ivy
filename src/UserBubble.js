import React from 'react';
import ProfileImage from './ProfileImage';

const UserBubble = ({ messages }) => {
    const bubbleStyle = {
      maxWidth: '300px', // Adjust to match the layout
      maxHeight: '100rem', // Adjust based on your needs
    };
   
    return (
      <div className="user-bubble-container">
        {messages.map((msg, index) => (
            <div key={index} className="user-bubble" style={bubbleStyle}>
                <ProfileImage imageName="user_profile.png" className="user-profile-image-container" />

                {msg}

            </div>
        ))}

        </div>
    );
    };

export default UserBubble;