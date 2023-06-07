import React from 'react';
import Lottie from 'react-lottie';
import Toggle from '../../assets/animations/toggle.json';
import styled from 'styled-components';


const ToggleAnimation = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Toggle,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };
  
    return (
      <ToggleSecion>
        <Lottie options={defaultOptions} />
      </ToggleSecion>
    );
  }
  
  export default ToggleAnimation;

    const ToggleSecion = styled.div`
        height: 100px;
        width: 124px;
    `
  