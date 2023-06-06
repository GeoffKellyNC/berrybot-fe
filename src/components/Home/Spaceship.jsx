import React from 'react';
import Lottie from 'react-lottie';
import spaceship from '../../assets/animations/spaceship.json';
import styled from 'styled-components';


const SpaceshipAnimation = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: spaceship,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };
  
    return (
      <Spaceship>
        <Lottie options={defaultOptions} />
      </Spaceship>
    );
  }
  
  export default SpaceshipAnimation;

    const Spaceship = styled.div`
        height: 600px;
        width: 500px;
    `
  