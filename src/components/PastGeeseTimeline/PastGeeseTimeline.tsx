import React from "react";
import styled from "styled-components";

import ImageCarousel from "./ImageCarousel";

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
    <h2>Past Geese</h2>
    <Container className={className}>
      <ImageCarousel />
    </Container>
  </>
);

export default PastGeeseTimeline;
