import React from 'react';
import Toggle from '../../assets/animations/toggle.json';
import styled from 'styled-components';
import { Player } from '@lottiefiles/react-lottie-player';


const ToggleAnimation = () => {


  
    return (
      <ToggleSecion>
        <Player
          autoplay
          loop
          src={Toggle}
          style={{ height: '100px', width: '124px' }}
        />
      </ToggleSecion>
    );
  }
  
  export default ToggleAnimation;

    const ToggleSecion = styled.div`
        height: 100px;
        width: 124px;
    `
  