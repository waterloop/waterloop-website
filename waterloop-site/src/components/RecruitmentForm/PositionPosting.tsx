import React, { useState, FunctionComponent } from "react";
import styled from "styled-components";
import { Button } from "../Button";
import Form from "./RecruitmentForm";
import { useParams } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";

const TextBlock = styled.div`
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
  @media (max-width: 425px) {
    padding-right: 0;
  }
`;

const Header = styled.h2`
  font-style: italic;
  font-size: 120%;
  margin-bottom: 0px !important;
`;

const Text = styled.p`
  margin-top: 14px !important;
  display: inline-block;
  text-align: left;
`;

const Block = styled.div`
  width: 80vw;
  display: flex;
  border-width: 0.15vw;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 10px 30px;
  @media (max-width: 425px) {
    width: 95%;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Background = styled.div`
  background-color: rgb(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0%;
  left: 0%;
  align-items: center;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const ButtonBlock = styled.div`
  float: left;
  display: inline;
`;

const Line = styled.hr`
  display: none;
  @media (max-width: 425px) {
    display: flex;
  }
`;

const CloseBtn = styled.button`
  background: #fed138;
  position: fixed;
  top: 10%;
  right: 20.5%;
  z-index: 3;
`;

type MyProps = {
  role: string;
  description: string;
  skills: string;
  technicalQ: string;
  termList: [string, string, string, string, string];
};

const PositionPosting: FunctionComponent<MyProps> = ({ role, description, skills, technicalQ, termList }) => {

  const [isJoinClicked, setJoinClicked] = useState(false)

  return (
    <Block>
      <TextBlock>
        <BrowserRouter>
          <Link to="/postingNumber">
            <Header>{role}</Header>
          </Link>
        </BrowserRouter>
        <Text>{description}</Text>
        <Text>
          <b>Skills Required: </b>
          {skills}
        </Text>
      </TextBlock>
      <ButtonBlock>
        <Button
          onClick={() => setJoinClicked(!isJoinClicked)}
          text="APPLY"
          backgroundColor="yellow"
          textColor="black"
          variant={null}
        ></Button>
      </ButtonBlock>
      {isJoinClicked && (
        <Background>
          <CloseBtn onClick={() => setJoinClicked(!isJoinClicked)}>X</CloseBtn>
          <Form
            role={role}
            technicalQ={technicalQ}
            termList={termList}
            onSuccess={() => setJoinClicked(false)}
          />
        </Background>
      )}
    </Block>
  )
}

export default PositionPosting;
