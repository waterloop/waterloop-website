import React from 'react';

import styled from 'styled-components';
import TeamsCarousel from './TeamsCarousel';

const TeamsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #8dbd7d 0%, #ffffff 100%);
`;

const HeadingContainer = styled.div`
  max-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

const Heading = styled.h1`
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  margin: 0;
  color: #000000;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

const Teams: React.FC = () => {
  return (
    <TeamsContainer id="teams">
      <HeadingContainer>
        <Heading>TEAMS</Heading>
      </HeadingContainer>

      <TeamsCarousel />
    </TeamsContainer>
  );
};

export default Teams;
