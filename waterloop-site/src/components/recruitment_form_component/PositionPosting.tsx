import React from "react"
import styled from "styled-components"
import Button from "../button/button.component"

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 1%;
  padding-left: 2%;
  @media (max-width: 500px){
    display: flex;
    width: 100%;
    padding: 0px 30px;
  }
`;

const Header = styled.h2`
  font-style: italic;
  font-size: 170%;
  margin-bottom: 0px !important;
`;

const Text = styled.p`
  font-size: 150%;
  margin-top: 14px !important;
  display: inline-block;
  text-align: left;


`;

const Block = styled.div`
  padding: 1%;
  width: 35%;
  height: 100%;
  border-style: solid;
  display: inline-block;
  border-width: 0.15vw;
  margin-left: 9.1%;
  margin-right: 2%;
  margin-top: 2%;
  margin-bottom: 2%;
  position: relative;
  @media (max-width: 750px){
    display: inline;
    border-style: none;
    border-width: none;

  }
`;

const ButtonBlock = styled.div`
    font-size: 1.5vw;
    float: right;
    display: inline;
`;

const Line = styled.hr`
  display: none;
  @media (max-width: 750px){
    display: flex;
  }
`;


type MyProps = { role: string, description: string, skills: string };

class PositionPosting extends React.Component<MyProps> {

  onClick(){
    return;
  }

  render() {
    return (
      <Block>
        <TextBlock>
          <Header>{this.props.role}</Header>
          <Text>{this.props.description}</Text>
          <Text><b>Skills Required: </b>{this.props.skills}</Text>
        </TextBlock>
        <ButtonBlock>
          <Button
            onClick = {this.onClick}
            text = "JOIN"
            backgroundColor = "yellow"
            textColor = "black"
            variant = {null}
          ></Button>
        </ButtonBlock>
        <Line></Line>
      </Block>


    );
  }
}

export default PositionPosting;
