import React from "react";
import styled from "styled-components";
import DownArrowImg from "../../static/img/background/downArrow.svg";
import "./styles.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 95vh;
  background-color: #232635;
  margin-bottom: 2em;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 23px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;

const ArrowContainer = styled.div`
  position: absolute;
  bottom: 75px;
`;

const DownArrow = styled.img`
  width: 40px;
  height: 17px;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
`;

type MyProps = { description: string; title: string };

class heroComponent extends React.Component<MyProps> {
  render() {
    return (
      <Container>
        <TitleContainer>
          <h1>{this.props.title}</h1>
        </TitleContainer>
        <DescriptionContainer>
          <h3>{this.props.description}</h3>
        </DescriptionContainer>
        <ArrowContainer>
          <DownArrow src={DownArrowImg}></DownArrow>
        </ArrowContainer>
      </Container>
    );
  }
}

export default heroComponent;
