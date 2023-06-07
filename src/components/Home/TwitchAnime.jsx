import React from 'react';
import Lottie from 'react-lottie';
import twitch from '../../assets/animations/twitch.json';
import styled from 'styled-components';


const TwitchAnimation = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: twitch,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };
  
    return (
      <Twitch>
        <Lottie options={defaultOptions} />
      </Twitch>
    );
  }
  
  export default TwitchAnimation;

    const Twitch = styled.div`
        height: 100px;
        width: 75px;
    `
  