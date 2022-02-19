import React from 'react';
import styled from 'styled-components';
import Waterloop from '../../../static/img/logos/Icon_Yellow.png';
import TeamPic from '../../../static/img/team/team.png';
import TeamsCarousel from './TeamsCarousel';

const AboutContainer = styled.section`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: lightgreen; */
`;

const HeadingContainer = styled.div`
  max-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  /* background-color: lightcoral; */
`;

const Heading = styled.h1`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin: 0;
  color: #3c6130;
  /* background-color: lightblue; */
`;

const AboutContentWrapper = styled.div`
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  margin: 30px 0;
  /* background-color: lightblue; */
`;

const DetailsContainer = styled.div`
  max-width: 800px;
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
  margin: 40px 0;

  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

const IconCircleContainer = styled.div``;

const IconCircleType1 = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: inline-block;
  background-color: #3c6130;
`;

const IconCircleType2 = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: inline-block;
  background-color: #80c169;
`;

const IconCircleType3 = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: inline-block;
  background-color: #d8eaba;
`;

const DetailsText = styled.p`
  font-size: 14px;
  color: #737b7d;
`;

const AboutEvent: React.FC = () => (
  <AboutContainer id="about">
    <HeadingContainer>
      <Heading>ABOUT THE EVENT</Heading>
    </HeadingContainer>

    <AboutContentWrapper>
      <DetailsContainer>
        <IconCircleContainer>
          <IconCircleType1></IconCircleType1>
        </IconCircleContainer>

        <DetailsText>
          Overtime, technological innovation has become a basic component of
          life. We adore and rely on the many benefits that are offered by
          computers and automation. But, we often forget to consider the
          negative impacts that arise when such technology is created/used. More
          importantly, the harm that is being done to the environment and how it
          is changing at every moment of our lives.
        </DetailsText>
      </DetailsContainer>

      <DetailsContainer>
        <DetailsText>
          The sustainable technology industry exists for this very reason: to
          help reduce and reverse the damage done to our planet. We want to
          showcase how UWaterloo is a part of the sustainable technology
          industry by sharing with you some of it's sustainable tech teams.
          You'll get to hear from us (Waterloop), Midnight Sun, UWAFT (not
          confirmed, may have to add)!
        </DetailsText>
        <IconCircleContainer>
          <IconCircleType2></IconCircleType2>
        </IconCircleContainer>
      </DetailsContainer>

      <DetailsContainer>
        <IconCircleContainer>
          <IconCircleType3></IconCircleType3>
        </IconCircleContainer>
        <DetailsText>
          If you’re interested in learning more about how green technology is
          doing its part in creating a better future or how to be a part of the
          change at UWaterloo, join us at the Sustainable Tech Event on March
          25th from 6pm to 8pm EST. Jump start your journey to living more
          ethically and sustainably!
        </DetailsText>
      </DetailsContainer>
    </AboutContentWrapper>

    <HeadingContainer>
      <Heading>TEAMS</Heading>
    </HeadingContainer>
    <TeamsCarousel />
  </AboutContainer>
);

export default AboutEvent;
