import React from 'react';
import styled from 'styled-components';

import Agenda from './Agenda';

const Container = styled.div`
  background-image: linear-gradient(#a3c7e1, #ffffff);
  overflow-x: hidden;
  padding: 100px 0;
`;

const Title = styled.h1`
  font-size: 44px;
  text-align: center;
  color: #514c49;
  width: 100%;
  margin-bottom: 30px;
`;

const Headline = styled.h2`
  font-size: 24px;
  text-align: center;
  color: #555555;
  width: 100%;
  margin-bottom: 30px;
  font-style: normal;
`;

const Text = styled.p`
  color: #555555;
  width: 60%;
  margin: auto;
`;

const Schedule: React.FC = () => (
  <Container>
    <Title>SCHEDULE</Title>
    <Headline>SUBTEXT / HEADLINE</Headline>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus
      eros nec eros tempus, ac euismod eros elementum. Nullam eu vehicula enim,
      at sollicitudin urna. Ut sed augue non nisi tincidunt pulvinar. Nulla
      facilisi.
    </Text>
    <Agenda />
  </Container>
);

export default Schedule;
