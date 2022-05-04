import React from 'react';
import styled from 'styled-components';

import { ScheduleSectionProps } from './Schedule';
import NodeEdge from './NodeEdge';

interface ScheduleSectionProps2 extends ScheduleSectionProps {
  isLast: boolean;
}

const SectionContainer = styled.div`
  display: flex;
`;

const Title = styled.h3`
  color: #80a773;
  font-weight: bold;
  font-size: 28px;
`;

const Subtitle = styled.p`
  color: #3c6130;
  font-weight: bold;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: inline-block;
  }
`;

const SectionImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 30px;
  object-fit: cover;
  object-position: 70%; // This value was determined through trial-and-error
  @media screen and (max-width: 768px) {
    float: left;
    width: 80px;
    height: 80px;
  }
`;

const ScheduleSection: React.FC<ScheduleSectionProps2> = ({
  title,
  subtitle,
  imageSrc,
  text,
  time,
  isLast,
}) => {
  return (
    <SectionContainer>
      <NodeEdge isLast={isLast} />
      <div>
        <Subtitle>{time}</Subtitle>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        <TextContainer>
          {imageSrc && <SectionImage src={imageSrc} />}
          <p>{text}</p>
        </TextContainer>
      </div>
    </SectionContainer>
  );
};

export default ScheduleSection;
