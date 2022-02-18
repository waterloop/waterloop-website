import React from 'react';
import styled from 'styled-components';
import Waterloop from '../../../static/img/logos/Icon_Yellow.png';
import TeamPic from '../../../static/img/team/team.png';

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

const TeamsContentWrapper = styled.div`
  max-width: 800px;
  margin: 50px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  /* background-color: lightblue; */
`;

const TeamCardContainer = styled.div`
  max-width: 800px;
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: #80c169;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.15);
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    gap: 10px;
    flex-direction: column;
  }
`;

const TeamImageWrapper = styled.div`
  max-width: 300px;
`;

const TeamImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const TeamInfoWrapper = styled.div``;

const TeamInfoHeading = styled.h2`
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
`;

const TeamInfoText = styled.p`
  font-size: 12px;
  color: #ffffff;
`;

const TeamsPickerContainer = styled.div`
  width: 100%;
  margin-top: 75px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  flex-wrap: wrap;
  /* background-color: lightblue; */
`;

const TeamsPickerCard = styled.div`
  max-width: 150px;
  min-width: 100px;
  border-radius: 8px;
  background-color: #d1cecd;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
`;

const TeamsPickerImage = styled.p`
  width: 100%;
  text-align: center;
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

    <TeamsContentWrapper>
      <TeamCardContainer>
        <TeamImageWrapper>
          <TeamImage src={TeamPic}></TeamImage>
        </TeamImageWrapper>

        <TeamInfoWrapper>
          <TeamInfoHeading>Lorem ipsum</TeamInfoHeading>
          <TeamInfoText>
            Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
            no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
            molestiae te. Ex duo eripuit mentitum. Et has minim elitr
            intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit
            quaerendum. At nam minimum ponderum. Est audiam animal molestiae te.
            Ex duo eripuit mentitum.
          </TeamInfoText>
        </TeamInfoWrapper>
      </TeamCardContainer>

      <TeamsPickerContainer>
        <TeamsPickerCard>
          <TeamsPickerImage>Team 1</TeamsPickerImage>
        </TeamsPickerCard>
        <TeamsPickerCard>
          <TeamsPickerImage>Team 2</TeamsPickerImage>
        </TeamsPickerCard>
        <TeamsPickerCard>
          <TeamsPickerImage>Team 3</TeamsPickerImage>
        </TeamsPickerCard>
        <TeamsPickerCard>
          <TeamsPickerImage>Team 4</TeamsPickerImage>
        </TeamsPickerCard>
      </TeamsPickerContainer>
    </TeamsContentWrapper>
  </AboutContainer>
);

export default AboutEvent;
