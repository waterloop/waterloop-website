import React from "react";
import AccordionDropdown from "./AccordionDropdown";
import styled from 'styled-components'
import Content from "static/copy/SustainableTech/FAQ.json";

const Title = styled.h1`
  font-size: 44px;
  text-align: center;
  color: black;
  width: 100%;
  margin-bottom: 50px;
`;

const Block = styled.div`
  padding-left: 10%;
  padding-right: 10%; 
`;

const FAQ: React.FC = () => (
    <Block>
    <Title>FAQ</Title>
    {Content.map(text => (
        <AccordionDropdown
            open={false}
            title={text.question}
        >
            {text.answer}
        </AccordionDropdown>
    ))}
    </Block>
);

export default FAQ;
