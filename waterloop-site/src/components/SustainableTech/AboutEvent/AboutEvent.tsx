import React from 'react';
import styled from 'styled-components';
import DetailsCard from './DetailsCard';
import WaterDesign from './img/water_section_divider.svg'

const AboutContainer = styled.section`
  /* padding: 40px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #a3c7e1 0%, #d9eaf7 35.73%, #ffffff 100%);
  /* background-color: lightgreen; */
`;

const SectionDivider = styled.img`
  width: 100%;
  margin: 0;
`

const HeadingContainer = styled.div`
  max-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  /* background-color: lightcoral; */
`;

const Heading = styled.h1`
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  margin: 0;
  color: #203d7a;
  /* background-color: lightblue; */

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

const AboutContentWrapper = styled.div`
  max-width: 1000px;
  margin: 30px 30px;
  /* background-color: lightblue; */
`;

const AboutText = styled.p`
  font-size: 20px;
  color: #000000;
  text-align: center;
  margin: 40px 0;
  line-height: 1.5;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const DetailsContainer = styled.div`
  margin: 30px 30px;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const AboutEvent: React.FC = () => (
  <AboutContainer id="about">
    
    <SectionDivider src={WaterDesign}/>

    <HeadingContainer>
      <Heading>ABOUT THE EVENT</Heading>
    </HeadingContainer>

    <AboutContentWrapper>
      <AboutText>
        Overtime, technological innovation has become a basic component of life.
        We adore and rely on the many benefits that are offered by computers and
        automation. But, we often forget to consider the negative impacts that
        arise when such technology is created/used. The sustainable technology
        industry exists for this very reason: to help reduce and reverse the
        damage done to our planet. We want to showcase how UWaterloo is a part
        of the sustainable technology industry by sharing with you some of it's
        sustainable tech teams.
      </AboutText>
    </AboutContentWrapper>

    <DetailsContainer>
      <DetailsCard icon={0} title="Date" detail="March 25th, 2022" />
      <DetailsCard icon={1} title="Time" detail="6pm to 8pm EST" />
      <DetailsCard icon={2} title="Place" detail="Virtually" />
    </DetailsContainer>
  </AboutContainer>
);

export default AboutEvent;
