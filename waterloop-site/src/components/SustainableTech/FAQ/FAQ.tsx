import React from 'react';
import styled from 'styled-components';

import AccordionDropdown from './AccordionDropdown';
import Content from 'static/copy/SustainableTech/FAQ.json';
import CloudImg from 'static/img/sustainable-tech/cloud.svg';
import CloudGroupImg from 'static/img/sustainable-tech/cloud-group.svg';
import GeeseImg from 'static/img/sustainable-tech/geese.svg';

const Block = styled.div`
  padding: 50px 0;
  background: linear-gradient(180deg, rgba(209, 230, 245, 0) 0%, #d1e6f5 100%);
  position: relative;
`;

const CloudSingle = styled.img`
  width: 15%;
  position: absolute;
  right: 5%;
`;

const CloudGroup1 = styled.img`
  width: 25%;
  position: absolute;
  left: 5%;
`;

const CloudGroup2 = styled.img`
  width: 25%;
  position: absolute;
  right: 5%;
  bottom: -20%;
`;

const Geese1 = styled.img`
  width: 7%;
  position: absolute;
  left: 15%;
`;

const Geese2 = styled.img`
  width: 10%;
  position: absolute;
  right: 15%;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: #000000;
  width: 100%;
  margin-bottom: 100px;
`;

const FAQ: React.FC = () => (
  <Block id="faq-scroll">
    <CloudGroup1 src={CloudGroupImg} />
    <Geese1 src={GeeseImg} />
    <CloudSingle src={CloudImg} />
    <Geese2 src={GeeseImg} />
    <Title>FAQ</Title>
    {Content.map((text, idx) => (
      <AccordionDropdown key={`ste-faq-${idx}`} open={false} text={text} />
    ))}
    <CloudGroup2 src={CloudGroupImg} />
  </Block>
);

export default FAQ;
