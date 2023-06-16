import React from 'react';
import Ai from '../../assets/animations/ai.json';
import styled from 'styled-components';
import { Player } from '@lottiefiles/react-lottie-player';


const AiAnimation = () => {

  
    return (
      <AiSection>
        <Player
          autoplay
          loop
          src={Ai}
          style={{ height: '100px', width: '75px' }}
        />
      </AiSection>
    );
  }
  
  export default AiAnimation;

    const AiSection = styled.div`
        height: 100px;
        width: 75px;
    `
  