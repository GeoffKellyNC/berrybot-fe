import React from 'react';
import MusicWave from '../../assets/animations/musicWave.json';
import styled from 'styled-components';
import { Player } from '@lottiefiles/react-lottie-player';


const MusicWaveAnimation = () => {


    return (
      <MusicWaveSection>
        <Player
          autoplay
          loop
          src={MusicWave}
          style={{ height: '100px', width: '75px' }}
        />
      </MusicWaveSection>
    );
  }
  
  export default MusicWaveAnimation;

    const MusicWaveSection = styled.div`
        height: 100px;
        width: 75px;
    `
  