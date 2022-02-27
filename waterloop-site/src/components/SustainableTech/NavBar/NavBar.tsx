import React from 'react';
import styled from 'styled-components';
import IconBlackImg from '../../../static/img/logos/Icon_Black.svg';
import { NavLink } from 'react-router-dom';
import scrollTo from '../utils/LinkScroll';

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  background-color: #e5f6fa;
  position: fixed;
  top: 0;
  scroll-behavior: smooth;
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

  @media screen and (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;

const LogoContainer = styled.div`
  padding-left: 4vw;
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
  background-color: #e5f6fa;
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
    color: #3c8c4a;
  }

  @media screen and (max-width: 1250px) {
    margin: 0 6pt;
    font-size: 16px;
  }

  @media screen and (max-width: 1000px) {
    margin: 0 8px;
    padding: 0;
    font-size: 16px;
  }

  @media screen and (max-width: 720px) {
    font-size: 13px;
  }

  @media screen and (max-width: 600px) {
    margin: 3px;
    font-size: 12px;
  }
`;

const ButtonContainer = styled.button`
  border-radius: 25px;
  background-color: #203d7a;
  text-decoration: none;
  color: white;
  font-family: 'IBM Plex Sans';
  font-size: 17px;
  font-weight: 500;
  padding: 10px 3%;
  margin-right: 4vw;
  border: #203d7a;
  transition: color 0.3s ease;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: white;
    color: #203d7a;
    border: white;
  }

  @media screen and (max-width: 1250px) {
    font-size: 16px;
  }

  @media screen and (max-width: 720px) {
    font-size: 10px;
  }
`;

const NavBar: React.FC = () => (
  <NavbarContainer>
    <LogoContainer>
      <NavLink to="/">
        <IconBlack src={IconBlackImg}></IconBlack>
      </NavLink>
    </LogoContainer>
    <ListContainer>
      <ScrollLink onClick={(): void => scrollTo('home-scroll')}>Home</ScrollLink>
      <ScrollLink onClick={(): void => scrollTo('IDlocation2')}>About</ScrollLink>
      <ScrollLink onClick={(): void => scrollTo('IDlocation3')}>Team</ScrollLink>
      <ScrollLink onClick={(): void => scrollTo('IDlocation4')}>Schedule</ScrollLink>
      <ScrollLink onClick={(): void => scrollTo('IDlocation5')}>Sponsors</ScrollLink>
      <ScrollLink onClick={(): void => scrollTo('IDlocation6')}>FAQ</ScrollLink>
    </ListContainer>
    <ButtonContainer as="a" href="http://Google_Form_Here">Sign Up</ButtonContainer>
  </NavbarContainer>
);
export default NavBar;
