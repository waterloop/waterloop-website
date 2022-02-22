import React, { createRef, useEffect, useState } from 'react';
import styled from 'styled-components';

import Content from 'static/copy/SustainableTech/Schedule.json';
import Nodes from './Nodes';

const castData: AgendaSection[] = Content;

interface AgendaSection {
  title: string;
  subtitle?: string;
  text: string;
  time: string;
}

const sectionBottomMargin = 50;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 50px;
`;

const TextContainer = styled.div`
  width: 50%;
  margin-left: 50px;
`;

const SectionContainer = styled.div`
  margin-bottom: ${sectionBottomMargin}px;
`;

const Title = styled.h3`
  color: #203d7a;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  color: #000000;
  font-weight: bold;
  margin-top: 0;
`;

const Text = styled.p``;

const Agenda: React.FC = () => {
  const [sectionRefs, setSectionRefs] = useState<any[]>([]);
  const [sectionHeights, setSectionHeights] = useState<number[]>([]);

  const getSectionRefs = () => {
    setSectionRefs((prevRefs) =>
      Array(castData.length)
        .fill(null)
        .map((_, i) => prevRefs[i] || createRef()),
    );
  };

  const getSectionHeights = () => {
    const heights = sectionRefs.map((ref) => ref.current?.offsetHeight);
    setSectionHeights(heights);
  };

  useEffect(() => {
    getSectionRefs();
  }, []);

  useEffect(() => {
    getSectionHeights();
    // eslint-disable-next-line
  }, [sectionRefs, window.innerHeight]);

  return (
    <Container>
      <Nodes
        sectionHeights={sectionHeights}
        sectionBottomMargin={sectionBottomMargin}
      />
      <TextContainer>
        {castData.map((item, idx) => (
          <SectionContainer
            key={`ste-schedule-section-${idx}`}
            id={`ste-schedule-section-${idx}`}
            ref={sectionRefs[idx]}
          >
            <Subtitle>{item.time}</Subtitle>
            <Title>{item.title}</Title>
            <Subtitle>{item.subtitle}</Subtitle>
            <Text>{item.text}</Text>
          </SectionContainer>
        ))}
      </TextContainer>
    </Container>
  );
};

export default Agenda;
