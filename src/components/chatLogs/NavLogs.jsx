import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../../assets/images/berry.png';

const NavLogs = () => {
  return (
    <Header>
      <LogoLink to="/dashboard">
        <LogoImage src={Logo} alt="Logo" />
      </LogoLink>
      <NavLinks>
        <NavLink to="/control-panel" activeClassName="active" end>
          Dashboard
        </NavLink>
      </NavLinks>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #282c34;
`;

const LogoLink = styled(NavLink)`
  display: block;
`;

const LogoImage = styled.img`
  height: 50px;
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;

  a {
    color: #fff;
    text-decoration: none;
    margin-right: 20px;
    font-size: 20px;
    font-family: ${p => p.theme.font.family.berry};

    &.active {
      font-weight: bold;
    }
  }
`;

export default NavLogs;
