import React from 'react';
import Lottie from 'react-lottie';
import MusicWave from '../../assets/animations/musicWave.json';
import styled from 'styled-components';


const MusicWaveAnimation = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: MusicWave,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };
  
    return (
      <MusicWaveSection>
        <Lottie options={defaultOptions} />
      </MusicWaveSection>
    );
  }
  
  export default MusicWaveAnimation;

    const MusicWaveSection = styled.div`
        height: 100px;
        width: 75px;
    `
  