import React from "react"
import styled from "styled-components"
import { Button } from "../Button"
import Form from "./RecruitmentForm"

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 1%;
  padding-left: 2%;
  @media (max-width: 750px){
    display: flex;
    width: 100%;
    padding: 0px 30px;
  }
`;

const Header = styled.h2`
  font-style: italic;
  font-size: 120%;
  margin-bottom: 0px !important;
`;

const Text = styled.p`
  font-size: 100%;
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

const Background = styled.div`
  background-color: rgb(0,0,0,0.25);
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

const CloseBtn = styled.button`
  background: #FED138;
  font-size: large;
  font-family: 'IBM Plex Sans';
  position: fixed;
  top: 15%;
  right: 29.5%;
  z-index: 3;
`;


type MyProps = { role: string, description: string, skills: string, technicalQ: string, termList: [string, string, string, string, string] }
type MyState = { joinClicked: boolean }

class PositionPosting extends React.Component<MyProps, MyState> {

  constructor(props: MyProps) {
    super(props);
    this.state = {
      joinClicked: false
    };
  }

  onClick() {
    if (!this.state.joinClicked) {
      this.setState({ joinClicked: true });
    }
    else {
      this.setState({ joinClicked: false });
    }
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
            onClick={this.onClick.bind(this)}
            text="JOIN"
            backgroundColor="yellow"
            textColor="black"
            variant={null}
          ></Button>
        </ButtonBlock>
        <Line></Line>
        {this.state.joinClicked &&
          <Background>
            <CloseBtn
              onClick={this.onClick.bind(this)}
            >
              X
          </CloseBtn>
            <Form
              role={this.props.role}
              technicalQ={this.props.technicalQ}
              termList={this.props.termList}
              onSuccess={() => this.setState({ joinClicked: false })}
            />
          </Background>
        }
      </Block>
    );
  }
}

export default PositionPosting;
