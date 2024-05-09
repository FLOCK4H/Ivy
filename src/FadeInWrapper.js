import React from 'react';

const FadeInWrapper = ({ children }) => {
  return (
    <div className="fadeIn-animate">
      {children}
    </div>
  );
};

export default FadeInWrapper;