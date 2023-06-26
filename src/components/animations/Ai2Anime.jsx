// Ai2Anime.jsx
import React from 'react';
import Ai2 from '../../assets/animations/ai2.json';
import styled from 'styled-components';
import { Player } from '@lottiefiles/react-lottie-player';

const Ai2Anime = () => {
    return (
      <Ai2Section>
        <Player
          autoplay
          loop
          src={Ai2}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
          }}
        />
      </Ai2Section>
    );
  };
  
  const Ai2Section = styled.div`
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
  `;
  

export default Ai2Anime;
