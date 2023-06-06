import React from 'react';
import styled from 'styled-components';
import twitchLoginLink from '../../util/twitchLoginLink';

import SpaceshipAnimation from './Spaceship';

import { Button } from 'antd';

const CTA = () => {
  const handleLoginClick = (e) => {
    e.preventDefault();
    window.location.href = twitchLoginLink;
  };

  return (
    <CallToAction>
      <div className="row">
        <AnimationContainer>
          <SpaceshipAnimation />
        </AnimationContainer>
        <div className="col-md-6" id="desc">
          <h1 className="title">Welcome to the Berry Bot</h1>
          <p className="description">
            Berry Bot: Elevate Your Twitch Experience with AI Integration, Advanced Features, and an Exclusive NCS Music Library!
          </p>
          <Button 
            className="login-btn" 
            type="primary" 
            ghost
            onClick={handleLoginClick}
            style={{"width": "200px", "height": "50px", "fontSize": "1.5rem"}}
            >
            Login
          </Button>
        </div>
      </div>
    </CallToAction>
  );
};

export default CTA;

const CallToAction = styled.div`
  color: ${(pr) => pr.theme.font.colors.primary};
  background-color: ${(pr) => pr.theme.colors.dashboard_background};
  height: auto;
  width: 100%;

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
  }

  .title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    font-family: ${(pr) => pr.theme.font.family.primary};
  }

  .description {
    font-size: 1.5rem;
    font-weight: 400;
    width: 80%;
    margin-bottom: 1rem;
    line-height: 1.5;
    font-family: ${(pr) => pr.theme.font.family.secondary};
  }

  .col-md-6 {
    width: 50%;
    padding: 0 2rem;
  }

  .login-btn {
    &:hover {
        color: ${(pr) => pr.theme.font.colors.primary};
        background-color: ${(pr) => pr.theme.colors.primary};
        border-color: ${(pr) => pr.theme.colors.dashboard_background};
    }
  }
`;

const AnimationContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
