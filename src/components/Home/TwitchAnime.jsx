import React from 'react';
import twitch from '../../assets/animations/twitch.json';
import styled from 'styled-components';
import { Player } from '@lottiefiles/react-lottie-player';


const TwitchAnimation = () => {

  
    return (
      <Twitch>
        <Player
          autoplay
          loop
          src={twitch}
          style={{ height: '100px', width: '75px' }}
        />
      </Twitch>
    );
  }
  
  export default TwitchAnimation;

    const Twitch = styled.div`
        height: 100px;
        width: 75px;
    `
  