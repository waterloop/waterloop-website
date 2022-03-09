import React from 'react';
import styled from 'styled-components';

import BackgroundSVG from 'static/img/sustainable-tech/schedule-background.svg';
import Agenda from './Agenda';

const Container = styled.div`
  background-image: linear-gradient(#ffffff, #e7f1e4);
  overflow-x: hidden;
  padding: 50px 0 200px 0;
  position: relative;
`;

const BackgroundImg = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0%;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: #000000;
  width: 100%;
  margin-bottom: 25px;
`;

const Schedule: React.FC = () => (
  <Container id="schedule-scroll">
    <Title>SCHEDULE</Title>
    <Agenda />
    <BackgroundImg src={BackgroundSVG} />
  </Container>
);

export default Schedule;
