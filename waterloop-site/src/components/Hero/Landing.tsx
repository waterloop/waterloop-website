import React from "react";
import styled from "styled-components";
import Button from "../button/CTAButton";
import BuildingsImg from "../../static/img/background/buildings.svg";
import DownArrowImg from "../../static/img/background/downArrow.svg";
import WaterloopImg from "../../static/img/background/waterloop.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #232635;
`;

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  color: #fefefe;
`;

const ArrowContainer = styled.div`
  position: absolute;
  bottom: 75px;
  z-index: 0;
`;

const BuildingContainer = styled.div`
  width: 100%;
  @media (max-width: 500px) {
    display: none;
  }
`;

const Buildings = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 30px;
`;

const DownArrow = styled.img`
  width: 40px;
  height: 17px;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
`;

const Content = styled.div`
  margin-bottom: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999;
`;

const WaterloopContainer = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: center;
`;

const Waterloop = styled.img`
  width: 700px;
  height: auto;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;

  @media (max-width: 500px) {
    width: 300px;
  }
`;

type MyProps = { description: string };

class heroComponent extends React.Component<MyProps> {
  render() {
    return (
      <Container>
        <Content>
          {/* waterloop svg */}
          <WaterloopContainer>
            <Waterloop src={WaterloopImg}></Waterloop>
          </WaterloopContainer>
          <DescriptionContainer>
            <h3>{this.props.description}</h3>
          </DescriptionContainer>
        </Content>
        <Button
          backgroundColor="yellow"
          textColor="black"
          text="Send"
          onClick={() => {
            document.getElementById("submitBtn")?.click();
          }}
          variant={null}
        ></Button>

        <ArrowContainer>
          <DownArrow src={DownArrowImg}></DownArrow>
        </ArrowContainer>
        <BuildingContainer>
          <Buildings src={BuildingsImg}></Buildings>
        </BuildingContainer>
      </Container>
    );
  }
}

export default heroComponent;
