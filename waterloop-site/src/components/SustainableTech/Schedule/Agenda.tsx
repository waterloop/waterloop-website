import React, { createRef, useEffect, useState } from 'react';
import styled from 'styled-components';

import Content from '../../../static/copy/SustainableTech/Schedule.json';
import Nodes from './Nodes';

interface AgendaSection {
  title: string;
  subtitle?: string;
  imagePath?: string;
  text: string;
  time: string;
}

const castData: AgendaSection[] = Content;
const sectionBottomMargin = 50;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ContentContainer = styled.div`
  width: 50%;
  margin-left: 50px;
`;

const SectionContainer = styled.div`
  margin-bottom: ${sectionBottomMargin}px;
`;

const Title = styled.h3`
  color: #80a773;
  font-weight: bold;
  font-size: 36px;
`;

const Subtitle = styled.p`
  color: #3c6130;
  font-weight: bold;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SectionImage = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  margin-right: 25px;
`;

const Text = styled.p``;

const Agenda: React.FC = () => {
  const [sectionRefs, setSectionRefs] = useState<any[]>([]);
  const [sectionHeights, setSectionHeights] = useState<number[]>([]);

  // Create refs for each schedule section, so that heights can be extracted
  const getSectionRefs = () => {
    setSectionRefs(
      Array(castData.length)
        .fill(null)
        .map((_, i) => createRef()),
    );
  };

  // Get the heights of each schedule section
  const getSectionHeights = () => {
    const heights = sectionRefs.map((ref) => ref.current?.offsetHeight);
    setSectionHeights(heights);
  };

  useEffect(() => {
    getSectionRefs();
  }, []);

  useEffect(() => {
    getSectionHeights();
  });

  return (
    <Container>
      <Nodes
        sectionHeights={sectionHeights}
        sectionBottomMargin={sectionBottomMargin}
      />
      <ContentContainer>
        {castData.map((item, idx) => (
          <SectionContainer
            key={`ste-schedule-section-${idx}`}
            id={`ste-schedule-section-${idx}`}
            ref={sectionRefs[idx]}
          >
            <Subtitle>{item.time}</Subtitle>
            <Title>{item.title}</Title>
            <Subtitle>{item.subtitle}</Subtitle>
            <TextContainer>
              {item.imagePath && <SectionImage src={item.imagePath} />}
              <Text>{item.text}</Text>
            </TextContainer>
          </SectionContainer>
        ))}
      </ContentContainer>
    </Container>
  );
};

export default Agenda;
