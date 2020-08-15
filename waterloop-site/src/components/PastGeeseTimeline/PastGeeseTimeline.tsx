import React from 'react';
import styled from 'styled-components';

import ImageCarousel from './ImageCarousel'

const Heading = styled.h2`
  font-family: IBM Plex Sans;
  font-style: italic;
  font-weight: 600;
  font-size: 28px;
  line-height: 62px;

  color: #010101;
`

const Container = styled.div`
  position: relative;
  width: 350px;
  @media only screen and (min-width: 900px) {
    width: 871px;
  }
`;

interface Props {
  className?: string;
}

const PastGeeseTimeline: React.FC<Props> = ({ className }) => (
  <Container className={className}>
    <Heading>
      Past Geese
    </Heading>
    <ImageCarousel />
  </Container>
);

export default PastGeeseTimeline;
