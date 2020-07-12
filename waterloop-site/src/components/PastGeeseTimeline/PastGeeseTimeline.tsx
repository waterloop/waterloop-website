import React from 'react';
import styled from 'styled-components';

import ImageCarousel from './ImageCarousel'

const Heading = styled.div`
  font-family: IBM Plex Sans;
  font-style: italic;
  font-weight: 600;
  font-size: 48px;
  line-height: 62px;

  color: #010101;
`

const Container = styled.div`
  position: relative;
`;

interface Props {
  className: string;
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
