import React from 'react';
import styled from 'styled-components';
import TeamsCarousel from './TeamsCarousel';

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #8DBD7D 0%, #FFFFFF 100%);
`;

const HeadingContainer = styled.div`
  max-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  /* background-color: lightcoral; */
`;

const Heading = styled.h1`
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  margin: 0;
  color: #000000;
  /* background-color: lightblue; */

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

const Teams: React.FC = () => {

  return (
    <AboutContainer id="teams">
      
      <HeadingContainer>
        <Heading>TEAMS</Heading>
      </HeadingContainer>

      <TeamsCarousel />
    </AboutContainer>
  );
};

export default Teams;