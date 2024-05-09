import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react';

const TextInputWithSend = forwardRef(({ onSend, initialTypingText }, ref) => {
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(true); // Initialize typing state to true
  const textAreaRef = useRef(null);
  const typingSpeed = 50; // Typing speed in milliseconds
  const startDelay = 5000; // Start delay for typing

  const adjustHeight = () => {
    if (textAreaRef.current) {
      if (inputText === '') {
        textAreaRef.current.style.height = '15px';
      } else {
        textAreaRef.current.style.height = 'auto';
        const newHeight = Math.min(textAreaRef.current.scrollHeight, 500);
        textAreaRef.current.style.height = `${newHeight}px`;
      }
    }
  };
  // Expose a method to clear the input
  useImperativeHandle(ref, () => ({
    clearInput: () => {
      setInputText('');
      // Reset the textarea height if needed
      if (textAreaRef.current) {
        textAreaRef.current.style.height = '15px';
      }
    },
  }));

  useEffect(() => {
    const startTypingTimer = setTimeout(() => {
      let typingIndex = 0;
      const typingTimer = setInterval(() => {
        if (typingIndex < initialTypingText.length) {
          setInputText(initialTypingText.substring(0, typingIndex + 1));
          adjustHeight();
          typingIndex++;
        } else {
          clearInterval(typingTimer);
          setIsTyping(false); // Stop typing
        }
      }, typingSpeed);

      return () => clearInterval(typingTimer);
    }, startDelay);

    return () => clearTimeout(startTypingTimer);
  }, [initialTypingText]);

  useEffect(() => {
    adjustHeight(); // Adjust height whenever inputText changes
  }, [inputText]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    adjustHeight(); // Adjust height as user types
  };

  const handleSend = () => {
    if (inputText.trim() !== '') {
      onSend(inputText);
      setInputText('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const onClickAnimation = (e, scale) => {
    e.target.style.transform = `scale(${scale})`;
    setTimeout(() => {
      e.target.style.transform = 'scale(1.0)';
    }, 300); // Duration after which it scales down
  };

  return (
    <div className="text-input-container">
      <textarea
        ref={textAreaRef}
        value={inputText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        spellCheck="false"
        style={{ 
          overflow: 'hidden', 
          resize: 'none'
        }}
        rows="1"
        readOnly={isTyping} // Prevent user input while typing
      ></textarea>
      <button
        onClick={handleSend}
        onMouseDown={(e) => onClickAnimation(e, 1.3)}
      ></button>
    </div>
  );
});

export default TextInputWithSend;