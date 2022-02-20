import React from "react";
import content from './content';
import Collapsible from "./collapsible";
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 44px;
  text-align: center;
  color: black;
  display: block;
  margin-bottom: 50px;
`;

const Block = styled.div`
  justify-content: center;
  padding-left: 10%;
  padding-right: 10%; 
`;

const FAQ: React.FC = () => (
    <Block>
    <Title>FAQ</Title>
    {content.map(bullet => (
        <Collapsible
            open={false}
            title={bullet.question}
        >
            {bullet.answer}
        </Collapsible>
    ))}
    </Block>
);

export default FAQ;
