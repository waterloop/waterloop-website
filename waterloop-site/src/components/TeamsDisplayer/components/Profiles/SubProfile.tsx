import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 0 0;
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
  color: #000000;
`;
const InfoTitle = styled.div`
  margin: 8px 0;

  @media (max-width: 975px) {
  }
`;
const InfoPosition = styled.div`
  @media (max-width: 975px) {
  }
`;

const SubProfile = (props: any) => {
  return (
    <Container onClick={props.onClick}>
      <Portrait src={props.portrait} alt="portrait" />
      <InfoContainer>
        <InfoTitle>
          <strong>{props.name}</strong>
        </InfoTitle>
        <InfoPosition>{props.position}</InfoPosition>
      </InfoContainer>
    </Container>
  );
};

export default SubProfile;
