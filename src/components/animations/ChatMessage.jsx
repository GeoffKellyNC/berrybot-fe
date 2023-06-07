import React from 'react';
import Lottie from 'react-lottie';
import Chat from '../../assets/animations/chat.json';
import styled from 'styled-components';


const ChatAnimation = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Chat,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };
  
    return (
      <ChatSection>
        <Lottie options={defaultOptions} />
      </ChatSection>
    );
  }
  
  export default ChatAnimation;

    const ChatSection = styled.div`
        height: 100px;
        width: 75px;
    `
  