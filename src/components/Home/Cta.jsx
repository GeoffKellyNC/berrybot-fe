import React from 'react';
import styled from 'styled-components';
import twitchLoginLink from '../../util/twitchLoginLink';

import SpaceshipAnimation from './Spaceship';
import TwitchAnimation from './TwitchAnime';
import ParticlesBG from '../Particles/ParticlesBG'

import { Button } from 'antd';

const CTA = ({ loginUserYouTube} ) => {

  const handleLoginClick = (e) => {
    e.preventDefault();
    window.location.href = twitchLoginLink;
  };

//   const handleLoginYouTubeClick = (e) => {
//     e.preventDefault();
//     loginUserYouTube();
// };

  return (
    <CallToAction>
        <div className='particles-bg'>
            <ParticlesBG />
        </div>
      <div className="row">
        <AnimationContainer>
          <SpaceshipAnimation />
        </AnimationContainer>
        <div className="col-md-6" id="desc">
          <h1 className="title">Welcome to Berry Bot</h1>
          <p className="description">
            Berry Bot: Elevate Your Twitch Experience with AI Integration, Advanced Features, and an Exclusive NCS Music Library!
          </p>
          <div className="login-btn-container">
            <Button 
                className="login-btn" 
                type="primary" 
                ghost
                onClick={handleLoginClick}
                style={{"width": "200px", "height": "50px", "fontSize": "1.5rem"}}
                >
                Login
            </Button>
            {/* <Button 
                className="login-btn" 
                type="primary" 
                ghost
                onClick={handleLoginYouTubeClick}
                style={{"width": "200px", "height": "50px", "fontSize": "1.5rem"}}
                >
                Login YouTube
            </Button> */}
            <TwitchAnimation />
          </div>
        </div>
      </div>
    </CallToAction>
  );
};

export default CTA;

const CallToAction = styled.div`
  color: ${(pr) => pr.theme.colors.secondary};
  background-color: ${(pr) => pr.theme.colors.dashboard_background};
  height: auto;
  width: 100%;
  position: relative;


  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
  }

  .title {
    color: ${(pr) => pr.theme.font.colors.primary};
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    font-family: ${(pr) => pr.theme.font.family.berry};
  }

  .description {
    color: white;
    font-size: 1.7rem;
    font-weight: 400;
    width: 80%;
    margin-bottom: 1rem;
    line-height: 1.5;
    font-family: ${(pr) => pr.theme.font.family.secondary};
  }

  .col-md-6 {
    width: 50%;
    padding: 0 2rem;
    z-index: 1;
  }

  .login-btn {
    &:hover {
        color: ${(pr) => pr.theme.font.colors.primary};
        background-color: ${(pr) => pr.theme.colors.primary};
        border-color: ${(pr) => pr.theme.colors.dashboard_background};
    }
  }

    .particles-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    
    }

    .login-btn-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 300px;
    }
`;

const AnimationContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
