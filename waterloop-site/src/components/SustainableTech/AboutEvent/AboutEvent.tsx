import React from 'react';
import styled from 'styled-components';

import DetailsCard from './DetailsCard';
import CalendarIcon from '../../../static/img/sustainable-tech/calendar.svg';
import ClockIcon from '../../../static/img/sustainable-tech/clock.svg';
import LocationIcon from '../../../static/img/sustainable-tech/location.svg';
import WaterDesign from '../../../static/img/sustainable-tech/water_section_divider.svg';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #a3c7e1 0%, #d9eaf7 35.73%, #ffffff 100%);
  padding-bottom: 25px;
`;

const SectionDivider = styled.img`
  width: 100%;
  position: relative;
  top: 0%;
`;

const Heading = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: #000000;
  margin-top: 50px;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

const AboutContentWrapper = styled.div`
  max-width: 1000px;
  margin: 30px;
`;

const AboutText = styled.p`
  font-size: 20px;
  color: #000000;
  text-align: center;
  margin-bottom: 40px;
  line-height: 1.5;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const DetailsContainer = styled.div`
  margin-bottom: 100px;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const AboutEvent: React.FC = () => (
  <AboutContainer id="about-scroll">
    <SectionDivider src={WaterDesign} />

    <Heading>ABOUT THE EVENT</Heading>

    <AboutContentWrapper>
      <AboutText>
        Over time, technological innovation has become a basic component of
        life. We adore and rely on the many benefits that are offered by
        computers and automation, but we often forget to consider the negative
        impacts that arise when such technology is used. The sustainable
        technology industry exists for this very reason: to help reduce and
        reverse the damage done to our planet. We want to showcase how the
        University of Waterloo (UW) contributes to the sustainable technology
        industry by sharing some of the UW’s sustainable tech teams with you!
      </AboutText>
    </AboutContentWrapper>

    <DetailsContainer>
      <DetailsCard icon={CalendarIcon} title="Date" detail="March 25th, 2022" />
      <DetailsCard icon={ClockIcon} title="Time" detail="6pm to 8:15pm EST" />
      <DetailsCard icon={LocationIcon} title="Place" detail="Virtually" />
    </DetailsContainer>
  </AboutContainer>
);

export default AboutEvent;
