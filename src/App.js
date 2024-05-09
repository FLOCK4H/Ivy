import React, { useState, useRef, useEffect } from 'react';
import './Ivy.css';
import AIBubble from './AIBubble'
import UserBubble from './UserBubble'
import HoverOpacityEffect from './HoverOpacityEffect';
import HoverBounceEffect from './HoverBounceEffect';
// import BlurShadowEffect from './BlurShadowEffect';
import TextInputWithSend from './TextInputWithSend';
import LogoImage from './LogoImage';
import RobotImage from './RobotImage'
import FadeInWrapper from './FadeInWrapper';
import IdeaImages from './IdeaImages'; 
import OnClickBounce from './onClickBounce';
import GlowingHR from './GlowingHR';
import ArrowRightDown from './ArrowRightDown';
import ClickAnimation from './ClickAnimation';
import Processor from './Processor';
import WebNet from './WebNet';

function App() {
  const [message, setInputText] = useState('');
  const [isBubbleActive, setBubbleActive] = useState(false);
  const [userMessages, setUserMessages] = useState([]); // State to hold user messages

  const processorRef = useRef(null);

  const initialText = "Hi, boss!\n\nThis is Ivy, your AI assistant, let me know if you need anything!";
  const bubbleRef = useRef(null);

  const textInputRef = useRef(null);

  const clearInput = () => {
    if (textInputRef.current) {
      textInputRef.current.clearInput();
    }
  };

  document.title = 'Ivy';
    // Call to show the Processor component
  const showProcessor = () => {
    if (processorRef.current) {
      processorRef.current.show();
    }
  };

  // Call to hide the Processor component
  const hideProcessor = () => {
    if (processorRef.current) {
      processorRef.current.hide();
    }
  };

  const sendMessage = () => {
    if (window.backend && message) {
      window.backend.receiveMessage(message);
    }
    setInputText('');
  };

  // Expose the functions to the global window object
  useEffect(() => {
    window.showProcessor = showProcessor;
    window.hideProcessor = hideProcessor;


    
    // Cleanup the global functions when the component unmounts
    return () => {
      delete window.showProcessor;
      delete window.hideProcessor;
    };
  }, []);

  const handleTextSend = (text) => {
    console.log("Text sent:", text);
    setUserMessages([...userMessages, text]); // Update user messages
    clearInput(); // Clear current message
    hideProcessor();
    sendMessage();
  };



  const toggleBubbleActive = () => setBubbleActive(!isBubbleActive);

  return (
    <div className="App">
      <header>
        {/* Header content goes here */}
      </header>

      <main>

      <HoverOpacityEffect>
          <LogoImage />
      </HoverOpacityEffect>

      <WebNet />
        {/* Centered container for bubbles */}
        <div className="bubble-container">
          <HoverBounceEffect>
            <OnClickBounce>
              <HoverOpacityEffect hoverOpacity="0.9">
                <AIBubble 
                  isActive={isBubbleActive} 
                  onClick={toggleBubbleActive} 
                  text={initialText} 
                  bubbleRef={bubbleRef} 
                />
              </HoverOpacityEffect>
            </OnClickBounce>
          </HoverBounceEffect>
          <HoverBounceEffect bounceDirection="right">
            <OnClickBounce>
              <HoverOpacityEffect hoverOpacity="0.8">          
                <UserBubble messages={userMessages} />
              </HoverOpacityEffect>
            </OnClickBounce>
          </HoverBounceEffect>
        </div>

        {/* PROCESSOR */}
        <Processor ref={processorRef}/>

        <FadeInWrapper>
          <HoverBounceEffect>
            <ArrowRightDown shouldAnimate={true}/>
            <TextInputWithSend ref={textInputRef} onSend={handleTextSend} initialTypingText="Ivy, search YouTube for rock music" />
            <ClickAnimation callback={(e) => handleTextSend("Ivy, search YouTube for rock music")}/>
          </HoverBounceEffect>
          </FadeInWrapper>

        <GlowingHR />

        <FadeInWrapper>

            <div className="ideas-content-container">
              <RobotImage />
              <IdeaImages /> 
            </div>

        </FadeInWrapper>
      </main>

      <footer>

        <p>Model may provide with inaccurate or false information.<br />© 2023 FlyTech</p>

      </footer>
    </div>
  );
}

export default App;