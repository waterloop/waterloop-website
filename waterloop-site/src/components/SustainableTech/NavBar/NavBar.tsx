import React from 'react';
import styled from 'styled-components';
import IconBlackImg from '../../../static/img/logos/Icon_Black.svg';
import { NavLink } from 'react-router-dom';
import scrollDown from './LinkScroll';

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 64px;
  background-color: #E5F6FA;
  position: fixed;
  top: 0;
  scroll-behavior: smooth;

  @media screen and (max-width: 900px) {
    justify-content: flex-end;
  }
`;


const IconBlack = styled.img`
  width: 50px;
  height: 50px;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;

  @media screen and (max-width: 900px) {
    width: 40px;
    height: 40px;
  }

  @media screen and (max-width: 720px) {
    width: 30px;
    height: 30px;
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  left: 0;
  top: 6px;
  align-items: left;
  padding-left: 4%;
  @media screen and (max-width: 900px) {
    top: 13px;
    padding-left: 3%;
  }

  @media screen and (max-width: 720px) {
    top: 17px;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
`;

const ScrollLink = styled.button`
  color: black;
  margin: 0 15pt;
  font-family: 'IBM Plex Sans';
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 500;
  background-color: #E5F6FA;
  border: none;
  cursor: pointer;

  text-decoration: none;
  &:visited,
  &:link {
    text-decoration: none;
  }

  &:focus,
  &:hover,
  &:active {
    text-decoration: none;
    color: #203D7A;
    ;
  }

  @media screen and (max-width: 1150px) {
    margin: 0 6pt;
    font-size: 16px;
  }

  @media screen and (max-width: 1060px) {
    margin: 0 6pt;
  }

  @media screen and (max-width: 900px) {
    margin: 0 8px;
    padding: 0;
    font-size: 16px;
  }

  @media screen and (max-width: 720px) {
    font-size: 13px;
  }

  @media screen and (max-width: 600px) {
    width: 80%;
    margin: 0;
    font-size: 11px;
  }
`; 

const NavBar: React.FC = () => 
<NavbarContainer>
  <LogoContainer>
    <NavLink to="/">
            <IconBlack src={IconBlackImg}></IconBlack>
      </NavLink>
  </LogoContainer>
  <ListContainer>
      <ScrollLink onClick={(): void => scrollDown('IDlocation1')}>
        Home
      </ScrollLink>
      <ScrollLink onClick={(): void => scrollDown('IDlocation2')}>
        Meet The Teams
      </ScrollLink>
      <ScrollLink onClick={(): void => scrollDown('IDlocation3')}>
        Our Sponsors
      </ScrollLink>
      <ScrollLink onClick={(): void => scrollDown('IDlocation4')}>
        About the Event
      </ScrollLink>
      <ScrollLink onClick={() => scrollDown('IDlocation5')}>
        FAQ
      </ScrollLink>
      <ScrollLink onClick={() => scrollDown('IDlocation6')}>
        Contact Us
      </ScrollLink>
    </ListContainer>
</NavbarContainer>
;

export default NavBar;
