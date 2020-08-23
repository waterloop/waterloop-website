import React from "react";
import styled from "styled-components";

import ImageCarousel from "./ImageCarousel";

const Heading = styled.h2`
  font-family: IBM Plex Sans;
  font-style: italic;
  font-weight: bold;
  font-size: 28px;
  line-height: 62px;

  color: #232636;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

interface Props {
  className?: string;
}

const PastGeeseTimeline: React.FC<Props> = ({ className }) => (
  <>
    <Heading>Past Geese</Heading>
    <Container className={className}>
      <ImageCarousel />
    </Container>
  </>
);

export default PastGeeseTimeline;
