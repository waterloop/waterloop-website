import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 975px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 265px;
  }
`;
const PortraitContainer = styled.div`
  flex-basis: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Portrait = styled.img`
  height: 100%;
  border-radius: 50% 50%;
  border: 4px solid #fbc531;
`;
const InfoContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: IBM Plex Sans;
  font-style: normal;
  color: #000000;
`;
const InfoTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 5px;
  @media (max-width: 975px) {
    font-size: 24px;
  }
`;
const InfoPosition = styled.div`
  font-weight: 200;
  font-size: 14px;

  @media (max-width: 975px) {
    font-weight: 200;
    font-size: 20px;
  }
`;

const SubProfile = (props: any) => {
  return (
    <Container onClick={props.onClick}>
      <PortraitContainer>
        <Portrait src={props.portrait} alt="portrait" />
      </PortraitContainer>
      <InfoContainer>
        <InfoTitle>{props.name}</InfoTitle>
        <InfoPosition>{props.position}</InfoPosition>
      </InfoContainer>
    </Container>
  );
};

export default SubProfile;
