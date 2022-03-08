import React from 'react';
import styled from 'styled-components';

import TeamsCarousel from './TeamsCarousel';

const TeamsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(#8dbd7d, #ffffff);
  padding: 50px 0 100px 0;
`;

const Heading = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: #000000;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

const Teams: React.FC = () => {
  return (
    <TeamsContainer id="teams-scroll">
      <Heading>TEAMS</Heading>
      <TeamsCarousel />
    </TeamsContainer>
  );
};

export default Teams;
