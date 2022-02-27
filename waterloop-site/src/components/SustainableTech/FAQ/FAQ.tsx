import React from 'react';
import styled from 'styled-components';

import AccordionDropdown from './AccordionDropdown';
import Content from 'static/copy/SustainableTech/FAQ.json';
import CloudImg from 'static/ste/icons/cloud.svg';
import CloudGroupImg from 'static/ste/icons/cloud-group.svg';
import GeeseImg from 'static/ste/icons/geese.svg';

const Title = styled.h1`
  font-size: 44px;
  text-align: center;
  color: black;
  width: 100%;
  margin-top: 20%;
  margin-bottom: 50px;
`;

const Block = styled.div`
  padding-bottom: 20%;
  background: linear-gradient(180deg, rgba(209, 230, 245, 0) 0%, #d1e6f5 100%);
  position: relative;
`;

const CloudSingle = styled.img`
  width: 15%;
  position: absolute;
  right: 5%;
  top: -15%;
`;

const CloudGroup1 = styled.img`
  width: 25%;
  position: absolute;
  left: 5%;
  top: -20%;
`;

const CloudGroup2 = styled.img`
  width: 25%;
  position: absolute;
  right:5%;
  bottom: 5%;
`;

const Geese1 = styled.img`
  width: 7%;
  position: absolute;
  left: 10%;
`;

const Geese2 = styled.img`
  width: 10%;
  position: absolute;
  right: 15%;
  top: -15%;
`;

const FAQ: React.FC = () => (
  <Block>
    <CloudGroup1 src={CloudGroupImg} />
    <Geese1 src={GeeseImg} />
    <CloudSingle src={CloudImg} />
    <Geese2 src={GeeseImg} />
    <Title>FAQ</Title>
    {Content.map((text) => (
      <AccordionDropdown open={false} title={text.question}>
        {text.answer}
      </AccordionDropdown>
    ))}
    <CloudGroup2 src={CloudGroupImg} />
  </Block>
);

export default FAQ;
