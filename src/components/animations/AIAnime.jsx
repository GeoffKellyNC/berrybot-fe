import React from 'react';
import Lottie from 'react-lottie';
import Ai from '../../assets/animations/ai.json';
import styled from 'styled-components';


const AiAnimation = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Ai,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };
  
    return (
      <AiSection>
        <Lottie options={defaultOptions} />
      </AiSection>
    );
  }
  
  export default AiAnimation;

    const AiSection = styled.div`
        height: 100px;
        width: 75px;
    `
  