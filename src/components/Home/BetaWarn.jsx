import React from 'react';
import styled from 'styled-components';

const PopUpContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${props => props.theme.colors.berry};
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.font.size.medium};
  z-index: 999;
`;

const DiscordLink = styled.a`
  color: ${props => props.theme.colors.primary};
  margin-left: 8px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const BetaWarningPopUp = () => {
  return (
    <PopUpContainer>
      <span>Attention: This app is currently in beta. If you have any questions, please visit our </span>
      <DiscordLink  onClick={() => window.open('https://discord.com/channels/851247292009938944/1084633989156966450')}>Discord server</DiscordLink>
    </PopUpContainer>
  );
};

export default BetaWarningPopUp;
