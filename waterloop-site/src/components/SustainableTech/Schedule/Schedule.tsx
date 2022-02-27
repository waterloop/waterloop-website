import React from 'react';
import styled from 'styled-components';

import BackgroundSVG from 'static/img/sustainable-tech/schedule-background.svg';
import Agenda from './Agenda';

const Container = styled.div`
  background-image: linear-gradient(#ffffff, #e7f1e4);
  overflow-x: hidden;
  padding: 100px 0 200px 0;
  position: relative;
`;

const BackgroundImg = styled.img.attrs({
  src: `${BackgroundSVG}`,
})`
  width: 100%;
  position: absolute;
  bottom: 0%;
`;

const Title = styled.h1`
  font-size: 48px;
  text-align: center;
  color: #514c49;
  width: 100%;
  margin-bottom: 50px;
`;

const Schedule: React.FC = () => (
  <Container>
    <Title>SCHEDULE</Title>
    <Agenda />
    <BackgroundImg />
  </Container>
);

export default Schedule;
