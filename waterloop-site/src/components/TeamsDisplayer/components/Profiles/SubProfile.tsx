import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Portrait = styled.img`
  height: 108px;
  width: 108px;
  border-radius: 50% 50%;
  border: 4px solid #fbc531;
`;
const InfoContainer = styled.div`
  margin: 8px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: IBM Plex Sans;
  font-style: normal;
  color: #000000;
`;
const InfoTitle = styled.div`
  font-weight: bold;
  margin: 8px 0;
  font-size: 16px;

  @media (max-width: 975px) {
    font-size: 14px;
  }
`;
const InfoPosition = styled.div`
  font-weight: 200;
  font-size: 14px;

  @media (max-width: 975px) {
    font-weight: 200;
    font-size: 12px;
  }
`;

const SubProfile = (props: any) => {
  return (
    <Container onClick={props.onClick}>
      <Portrait src={props.portrait} alt="portrait" />
      <InfoContainer>
        <InfoTitle>{props.name}</InfoTitle>
        <InfoPosition>{props.position}</InfoPosition>
      </InfoContainer>
    </Container>
  );
};

export default SubProfile;
