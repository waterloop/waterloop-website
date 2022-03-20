import React from 'react';
import styled from 'styled-components';

import LandingImage from '../../../static/img/sustainable-tech/HeroLandingImage.svg';
import GreenTechLogo from '../../../static/img/sustainable-tech/GreenTechLogo.svg';
import MobileLandingImage from '../../../static/img/sustainable-tech/MobileLandingImage.svg';

const LandingContainer = styled.div`
  background-image: url(${LandingImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #e5f6fa;
  height: 100vh;
  z-index: -6;
  @media screen and (max-width: 414px) {
    background-image: url(${MobileLandingImage});
    margin: 7vh 0 -6vh 0;
  }
  @media screen and (max-width: 390px) {
    margin: 8vh 0 -8vh 0;
  }
  @media screen and (max-width: 375px) {
    margin: 9.4vh 0 -20vh 0;
    height: 880px;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`;

const GreenTech = styled.img`
  height: 300px;
  width: auto;
  padding-top: 8%;

  @media (max-width: 1200px) {
    height: 250px;
    padding-top: 120px;
  }

  @media (max-height: 800px) {
    height: 300px;
    padding-top: 120px;
  }

  @media (max-height: 670px) {
    height: 200px;
    padding-top: 80px;
  }

  @media (max-height: 580px) {
    height: 170px;
  }

  @media (max-width: 550px) {
    height: 190px;
  }

  @media (max-width: 450px) {
    padding-top: 130px;
    height: 190px;
  }

  @media (max-width: 330px) {
    height: 150px;
  }

  @media (max-width: 250px) {
    padding-top: 120px;
    height: 130px;
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
  padding: 16px 5%;
  border: #203d7a;
  margin: 3% 0;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    color: #203d7a;
    background-color: white;
  }

  @media (max-width: 1300px) {
    padding: 10px 9%;
  }

  @media (max-height: 670px) {
    padding: 10px 40px;
  }

  @media (max-width: 650px) {
    font-size: 17px;
    padding: 10px 15%;
    margin-top: 50px;
  }

  @media (max-width: 380px) {
    margin-top: 60px;
  }
  
`;

const Hero: React.FC = () => (
  <LandingContainer id="outer">
    <MainContent id="home-scroll">
      <GreenTech alt="Green Tech Logo" src={GreenTechLogo} />
      <ButtonContainer
        as="a"
        href="https://tinyurl.com/uwgreentech"
        target="_blank"
        rel="noopener noreferrer"
      >
        SIGN UP
      </ButtonContainer>
    </MainContent>
  </LandingContainer>
);
export default Hero;
