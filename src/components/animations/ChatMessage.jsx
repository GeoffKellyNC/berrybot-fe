import React from 'react';
import Chat from '../../assets/animations/chat.json';
import styled from 'styled-components';
import { Player } from '@lottiefiles/react-lottie-player';


const ChatAnimation = () => {


  
    return (
      <ChatSection>
        <Player
          autoplay
          loop
          src={Chat}
          style={{ height: '100px', width: '75px' }}
        />
      </ChatSection>
    );
  }
  
  export default ChatAnimation;

    const ChatSection = styled.div`
        height: 100px;
        width: 75px;
    `
  