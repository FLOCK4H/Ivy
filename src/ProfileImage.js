import React from 'react';
import './ProfileImage.css';

const ProfileImage = ({ imageName, className }) => {
  return (
    <div className={className}>
      <img src={imageName} alt="Profile" className="profile-image" />
    </div>
  );
};

export default ProfileImage;