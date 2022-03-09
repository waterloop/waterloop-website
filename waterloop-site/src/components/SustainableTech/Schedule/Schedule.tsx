import React from 'react';
import styled from 'styled-components';

import Content from '../../../static/copy/SustainableTech/Schedule.json';
import BackgroundSVG from 'static/img/sustainable-tech/schedule-background.svg';
import ScheduleSection from './ScheduleSection';

export interface ScheduleSectionProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  text: string;
  time: string;
}

const castData: ScheduleSectionProps[] = Content;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(#ffffff, #e7f1e4);
  overflow-x: hidden;
  padding: 50px 0 200px 0;
  position: relative;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: #000000;
  width: 100%;
  margin-bottom: 30px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const BackgroundImg = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0%;
`;

const Schedule: React.FC = () => (
  <Container id="schedule-scroll">
    <Title>SCHEDULE</Title>
    <ContentContainer>
      {castData.map((item, idx) => (
        <ScheduleSection
          key={`ste-schedule-section-${idx}`}
          title={item.title}
          subtitle={item.subtitle}
          imageSrc={item.imageSrc}
          text={item.text}
          time={item.time}
          isLast={idx === castData.length - 1}
        />
      ))}
    </ContentContainer>
    <BackgroundImg src={BackgroundSVG} />
  </Container>
);

export default Schedule;
