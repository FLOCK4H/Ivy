import React, { useEffect, useState } from 'react';
import './ArrowRightDown.css';

const ArrowRightDown = () => {
  // Initial state is false so it starts without the 'animate' class
  const [animate, setAnimate] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // This timeout will trigger the rotation animation after the component mounts
    const animateTimer = setTimeout(() => {
      setAnimate(true);
    }, 200); // Short delay before starting the animation

    // This timeout will hide the arrow after some time
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 1000); // Starts the hide animation 5 seconds after the component mounts

    return () => {
      clearTimeout(animateTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className={`arrow-container ${animate ? 'animate' : ''} ${!visible ? 'hide' : ''}`}>
      <img src="arrow_right_down.png" alt="Arrow pointing down" width={226} height={128}/>
    </div>
  );
};

export default ArrowRightDown;