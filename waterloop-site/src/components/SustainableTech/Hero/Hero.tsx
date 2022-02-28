import React from 'react';
import styled from 'styled-components';
import LandingImage from '../../../static/img/sustainable-tech/HeroLandingImage.svg';
import GreenTechLogo from '../../../static/img/sustainable-tech/GreenTechLogo.svg';

const LandingContainer = styled.div`
  padding: 60px 0 30px;
  display: flex;
  justify-content: center;
  background-color: #E5F6FA;
`;

const LandingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const LandingImageContainer = styled.img`
  height: 100vh;
  overflow: hidden;
  background-color: #E5F6FA;
`;

const MainContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
`;

const GreenTech = styled.img`
  height: 300px;
  width: auto;

  @media (max-width: 550px) {
    height: 400px;
  }
`;

/* IBM plex sans */

const ButtonContainer = styled.button`
  border-radius: 30px;
  background-color: #203d7a;
  text-decoration: none;
  color: white;
  font-family: 'IBM Plex Sans';
  font-size: 24px;
  font-weight: 500;
  padding: 15px 10%;
  border: #203d7a;
  transition: color 0.1s ease;
  transition: background-color 0.1s ease;

  &:hover {
    cursor: pointer;
    color: #203d7a;
    background-color: white;
  }

  @media (max-width: 550px) {
    font-size: 17px;
    padding: 10px 15%;
  }
`;

const Hero: React.FC = () => 
<LandingContainer>
  <LandingContent>
      <MainContent id="home-scroll">
        <GreenTech alt={'Green Tech Logo'} src={GreenTechLogo}></GreenTech>
        <ButtonContainer as="a" href="http://Google_Form_Here">Sign Up</ButtonContainer>
      </MainContent>
     <LandingImageContainer alt={'Green Tech Landing Image'} src={LandingImage} />
  </LandingContent>
</LandingContainer>
;

export default Hero;
