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
  background-color: #E5F6FA;
`;

const MainContent = styled.div`
  position: absolute;
  background-color: black;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const GreenTech = styled.img`
  height: 300px;
  width: auto;
`;

const Hero: React.FC = () => 
<LandingContainer>
  <LandingContent>
      <MainContent>
        <GreenTech alt={'Green Tech Logo'} src={GreenTechLogo}></GreenTech>
      </MainContent>
     <LandingImageContainer alt={'Green Tech Landing Image'} src={LandingImage} />
  </LandingContent>
</LandingContainer>
;

export default Hero;
