import React from 'react';
import styled from 'styled-components';

import LandingImage from '../../../static/img/sustainable-tech/HeroLandingImage.svg';
import GreenTechLogo from '../../../static/img/sustainable-tech/GreenTechLogo.svg';

const LandingContainer = styled.div`
  background-image: url(${LandingImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #e5f6fa;
  width: 100%;
  height: 100vh;
`;

const MainContent = styled.div`
  position: absolute;
  top: 38%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const GreenTech = styled.img`
  height: 300px;
  width: auto;

  @media (max-width: 1200px) {
    height: 250px;
  }

  @media (max-width: 430px) {
    height: 190px;
  }

  @media (max-width: 300px) {
    height: 150px;
  }
`;

const ButtonContainer = styled.button`
  border-radius: 30px;
  background-color: #203d7a;
  text-decoration: none;
  color: white;
  font-family: 'IBM Plex Sans';
  font-size: 19px;
  font-weight: 500;
  padding: 15px 15%;
  border: #203d7a;
  margin: 10% 0;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    color: #203d7a;
    background-color: white;
  }

  @media (max-width: 650px) {
    font-size: 17px;
    padding: 10px 15%;
  }
`;

const Hero: React.FC = () => (
  <LandingContainer id="outer">
    <MainContent id="home-scroll">
      <GreenTech alt="Green Tech Logo" src={GreenTechLogo} />
      <ButtonContainer as="a" href="https://tinyurl.com/uwgreentech">
        SIGN UP
      </ButtonContainer>
    </MainContent>
  </LandingContainer>
);
export default Hero;
