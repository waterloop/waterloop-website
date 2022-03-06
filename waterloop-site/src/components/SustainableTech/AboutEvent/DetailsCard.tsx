import React from 'react';

import styled from 'styled-components';

const CardContainer = styled.div`
  margin: 20px;
  width: 345px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 20px;
  box-shadow: 0px 3px 20px #d7e7f3;

  @media screen and (max-width: 425px) {
    width: 225px;
  }
`;

const InfoContainer = styled.div`
  min-width: 200px;
`;

const Title = styled.h1`
  font-size: 25px;
  margin-top: 20px;
  color: #203d7a;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  margin: 5px 10px 10px 10px;
  color: #737b7d;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const IconCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  background-color: #203d7a;

  @media screen and (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const Icon = styled.img`
  width: 40%;
`;

interface Props {
  icon?: string;
  title?: string;
  detail?: string;
}

const DetailsCard: React.FC<Props> = (props) => {
  return (
    <CardContainer>
      <div>
        <IconCircle>
          <Icon src={props.icon} alt="Icon" />
        </IconCircle>
      </div>

      <InfoContainer>
        <Title>{props.title}</Title>
        <Description>{props.detail}</Description>
      </InfoContainer>
    </CardContainer>
  );
};

export default DetailsCard;
