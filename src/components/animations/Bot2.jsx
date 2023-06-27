import React from 'react';
import Bot2Img from '../../assets/animations/bot2.json';
import styled from 'styled-components';
import { Player } from '@lottiefiles/react-lottie-player';

const Bot2 = () => {
  return (
    <Bot2Section>
      <Player
        autoplay
        loop
        src={Bot2Img}
        style={{ height: '130%', width: '130%' }} // Updated size
      />
    </Bot2Section>
  );
}

const Bot2Section = styled.div`
  position: absolute;
  bottom: -7%;
  left: 80%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

export default Bot2;
