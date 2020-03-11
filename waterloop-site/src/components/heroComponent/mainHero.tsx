import React from "react";
import styled from "styled-components";
import CTAButton from "./CTAButton";
// import buildings from "../../imgs/buildings.svg";
import DownArrowImg from "../../imgs/downArrow.svg";

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

  > h3 {
      font-size: 30px;
      colour: white;
  } 
`;

const ArrowContainer = styled.div`
  position: absolute;
  bottom: 75px;
`;

const Buildings = styled.img`
  width: auto;
  height: auto;

`;

const DownArrow = styled.img`
  width: 40px;
  height: 17px;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
`;

type MyProps = { description: string; };

class heroComponent extends React.Component<MyProps> {
    render() {
        return (
            <Container>
                {/* waterloop svg */}
                <DescriptionContainer>
                    <h3>{this.props.description}</h3>
                </DescriptionContainer>
                <CTAButton
                    title="JOIN US"
                    link="https://google.com"
                ></CTAButton>
                {/* <buildings></buildings> */}
                <ArrowContainer>
                    <DownArrow src={DownArrowImg}></DownArrow>
                </ArrowContainer>
            </Container>
        );
    }
}

export default heroComponent;
