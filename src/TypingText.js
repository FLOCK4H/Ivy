import React, { useState, useEffect } from 'react';

const TypingText = ({ text, typingSpeed = 50, startDelay = 5000 },) => {
  
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false); // Start with typing set to false
  const lineBreakMarker = "\n";

  useEffect(() => {
    // Start typing after a delay
    const startTypingTimer = setTimeout(() => {
      setIsTyping(true);
    }, startDelay);

    return () => clearTimeout(startTypingTimer);
  }, [startDelay]);

  useEffect(() => {
    let typingTimer;
    if (isTyping && text) {
      if (displayedText.length < text.length) {
        typingTimer = setTimeout(() => {
          setDisplayedText(text.substring(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        setIsTyping(false);
      }
    }
    return () => clearTimeout(typingTimer);
  }, [displayedText, isTyping, text, typingSpeed]);

  const renderTextWithLineBreaks = () => {
    return (
      <React.Fragment>
        {displayedText.split(lineBreakMarker).map((line, index, array) => (
          <React.Fragment key={index}>
            {line}
            {index !== array.length - 1 && <br />}
          </React.Fragment>
        ))}
        {<span className="cursor cursor-blink"></span>}
      </React.Fragment>
    );
  };

  return <span>{renderTextWithLineBreaks()}</span>;
};

export default TypingText;