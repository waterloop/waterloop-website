import React from "react"
import styled from "styled-components"
import Button from "../button/button.component"

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 2%;
  padding-left: 2%;
  @media (max-width: 500px){
    display: flex;
    width: 100%;
    text-align: center;
    padding: 0px 30px;
  }
`;

const Header = styled.h2`
  font-style: italic;
  font-size: 170%;
  margin-bottom: 0px !important;
  @media (max-width: 500px){
    font-size: 25px;
  }
`;

const Text = styled.p`
  font-size: 150%;
  margin-top: 14px !important;

  @media (max-width: 500px){
    font-size: 13px;
    text-align: left;
  }
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
`;

const ButtonBlock = styled.div`
    font-size: 1.5vw;
    float: right;
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
      </Block>

    );
  }
}

export default PositionPosting;
