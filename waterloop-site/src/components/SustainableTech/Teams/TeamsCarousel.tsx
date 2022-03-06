import React from 'react';

import { useSwipeable } from 'react-swipeable';
import styled from 'styled-components';
import useTeamImages from './hooks/team-images';

const TeamsContentWrapper = styled.div`
  max-width: 1200px;
  margin: 50px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

const TeamCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 380px;
  min-height: 380px;
  margin: 0 30px;
  padding: 20px;
  background-color: #618a4d;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  @media screen and (max-width: 768px) {
    gap: 10px;
    flex-direction: column;
    padding: 40px;
    max-height: none;
  }
`;

const SlideContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 50px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    gap: 10px;
    flex-direction: column;
  }
`;

const TeamImageWrapper = styled.div`
  max-width: 40%;
  @media screen and (max-width: 768px) {
    max-width: 90%;
  }
`;

const TeamImage = styled.img`
  width: 100%;
  border-radius: 15px;
`;

const TeamInfoWrapper = styled.div`
  max-width: 55%;
  @media screen and (max-width: 768px) {
    max-width: 90%;
  }
`;

const TeamInfoHeading = styled.h2`
  font-weight: bold;
  font-style: normal;
  font-size: 24px;
  color: #ffffff;
`;

const TeamInfoText = styled.p`
  font-size: 16px;
  color: #ffffff;
`;

const Arrow = styled.i`
  font-size: 48px;
  cursor: pointer;
  display: none;
  color: #ffffff;
  @media only screen and (min-width: 768px) {
    display: flex;
  }
  &:hover {
    transition: transform 0.2s;
    transform: scale(1.15);
  }
`;

const ArrowMobile = styled.i`
  font-size: 48px;
  cursor: pointer;
  display: flex;
  color: #ffffff;
  @media only screen and (min-width: 768px) {
    display: none;
  }
  &:hover {
    transition: transform 0.2s;
    transform: scale(1.15);
  }
`;

const MobileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
    box-shadow: none;
    flex-direction: row;
  }
`;

const TeamsPickerContainer = styled.div`
  width: 95%;
  margin: 30px 30px 0 30px;
  display: flex;
  justify-content: space-evenly;
  gap: 15px;
  flex-wrap: wrap;
`;

const TeamsPickerImage = styled.img`
  height: 90%;
  border-radius: 15px;
`;

const TeamsUWFormulaImage = styled.img`
  width: 80%;
`;

const TeamsPickerCard = styled.div`
  width: 216px;
  height: 124px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transition: transform 0.3s;
    transform: scale(1.05);
  }
`;

const TeamsCarousel: React.FC = () => {
  const {
    image,
    name,
    desc,
    imgs,
    cycleLeft,
    cycleRight,
    selectTeam,
  } = useTeamImages();

  const swipeHandlers = useSwipeable({
    onSwipedLeft: cycleLeft,
    onSwipedRight: cycleRight,
  });

  return (
    <TeamsContentWrapper>
      <TeamCardContainer>
        <Arrow className="material-icons" onClick={cycleLeft}>
          keyboard_arrow_left
        </Arrow>

        <SlideContainer {...swipeHandlers}>
          <TeamImageWrapper>
            <TeamImage src={image} alt="team-image"></TeamImage>
          </TeamImageWrapper>

          <TeamInfoWrapper>
            <TeamInfoHeading>{name}</TeamInfoHeading>
            <TeamInfoText>{desc}</TeamInfoText>
          </TeamInfoWrapper>
        </SlideContainer>

        <Arrow className="material-icons" onClick={cycleRight}>
          keyboard_arrow_right
        </Arrow>

        <MobileContainer>
          <ArrowMobile className="material-icons" onClick={cycleLeft}>
            keyboard_arrow_left
          </ArrowMobile>
          <ArrowMobile className="material-icons" onClick={cycleRight}>
            keyboard_arrow_right
          </ArrowMobile>
        </MobileContainer>
      </TeamCardContainer>

      <TeamsPickerContainer>
        {imgs.map((team, i: number) => {
          if (i !== 0) {
            return (
              <TeamsPickerCard onClick={selectTeam(i)}>
                {i !== 1 ? (
                  <TeamsPickerImage src={team.logoPath} alt="logo" />
                ) : (
                  <TeamsUWFormulaImage src={team.logoPath} alt="logo" />
                )}
              </TeamsPickerCard>
            );
          }
        })}
      </TeamsPickerContainer>
    </TeamsContentWrapper>
  );
};

export default TeamsCarousel;
