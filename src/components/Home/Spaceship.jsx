import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import spaceship from '../../assets/animations/robot.json';
import styled from 'styled-components';


const SpaceshipAnimation = () => {

  
    return (
      <Spaceship>
        <Player
          autoplay
          loop
          src={spaceship}
          style={{ height: '600px', width: '500px' }}
        />
      </Spaceship>
    );
  }
  
  export default SpaceshipAnimation;

    const Spaceship = styled.div`
        height: 600px;
        width: 500px;
    `
  