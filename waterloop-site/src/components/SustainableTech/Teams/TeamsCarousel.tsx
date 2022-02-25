import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useTeamImages from './hooks/team-images';

const TeamsContentWrapper = styled.div`
  max-width: 800px;
  margin: 50px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

const TeamCardContainer = styled.div`
  max-width: 800px;
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: #618A4D;
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
`;

const TeamsPickerImage = styled.img`
  width: 100%;
`;

const TeamsPickerCard = styled.div`
  max-width: 150px;
  min-width: 100px;
  border-radius: 8px;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.15);

  &:hover ${TeamsPickerImage} {
    cursor: pointer;
  }
`;

const TeamsCarousel: React.FC = () => {
  const { image, name, desc, imgs, currentTeam, selectTeam } = useTeamImages();

  return (
    <TeamsContentWrapper>
      <TeamCardContainer>
        <TeamImageWrapper>
          <TeamImage src={image}></TeamImage>
        </TeamImageWrapper>

        <div>
          <TeamInfoHeading>{name}</TeamInfoHeading>
          <TeamInfoText>{desc}</TeamInfoText>
        </div>
      </TeamCardContainer>

      <TeamsPickerContainer>
        {imgs.map((team, i: number) => {
          if (i === 0) {
            return <></>;
          } else {
            return (
              <TeamsPickerCard onClick={selectTeam(i)}>
                <TeamsPickerImage src={team.imgFile} />
              </TeamsPickerCard>
            );
          }
        })}
      </TeamsPickerContainer>
    </TeamsContentWrapper>
  );
};

export default TeamsCarousel;
