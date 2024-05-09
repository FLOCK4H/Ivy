import React, { useEffect, useState } from 'react';
import './ClickAnimation.css';

const ClickAnimation = ({ callback }) => {
  const [animate, setAnimate] = useState(false);
  const [click, setClick] = useState(false);
  const [showWave1, setShowWave1] = useState(false);
  const [showWave2, setShowWave2] = useState(false);

  useEffect(() => {
    // Start the cursor movement
    const animateTimer = setTimeout(() => {
      setAnimate(true);
      const clickTimer = setTimeout(() => {
        setClick(true);

        const wave1Timer = setTimeout(() => setShowWave1(true), 100);
        const wave2Timer = setTimeout(() => setShowWave2(true), 300);

        const resetTimer = setTimeout(() => {
          setClick(false);
          setShowWave1(false);
          setShowWave2(false);
          
          // Invoke the callback function after the animations have completed
          if (typeof callback === 'function') {
            callback(); // Call the passed-in callback function
          }

          // Trigger fade-out after last wave animation is done
          const fadeOutTimer = setTimeout(() => {
            setAnimate(false); // This will trigger the fade-out animation
          }, 100); // This should be the duration of the longest wave animation

          return () => {
            clearTimeout(fadeOutTimer);
          };
        }, 1000); // Duration of the click effect

        return () => {
          clearTimeout(wave1Timer);
          clearTimeout(wave2Timer);
          clearTimeout(resetTimer);
        };
      }, 600); // After the cursor movement

      return () => {
        clearTimeout(animateTimer);
        clearTimeout(clickTimer);
      };
    }, 7000); // Delay before starting the animation

    // This will ensure the effect only runs once on mount
    return () => {
      clearTimeout(animateTimer);
    };
  }, [ ]);

  return (
    <div className={`cursor-container ${animate ? 'animate' : ''} ${click ? 'click' : ''}`}>
      <img src="cursor.png" alt="Cursor" width={32} height={40}/>
      {showWave1 && <div className="wave show" style={{ animationDelay: '100ms' }}></div>}
      {showWave2 && <div className="wave show" style={{ animationDelay: '400ms' }}></div>}
    </div>
  );
};

export default ClickAnimation;