import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './animelist.jpg';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  text-decoration: none;
`;

const LinkContainer = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-around;
`;
const LogoTitle = styled.img`
  height: 15%;
  width: 15%;
  float: left;
`;
const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: black;
  font-size: 25px;
`;

export default function Nav() {
  return (
    <NavbarContainer>
      <LogoTitle alt="Best Fuckin Anime List Logo" src={logo} />
      <LinkContainer>
        <StyledLink to="/list"> List </StyledLink>
        <StyledLink to="/signup"> Sign Up </StyledLink>
        <StyledLink to="/login"> Login </StyledLink>
      </LinkContainer>
    </NavbarContainer>
  );
}