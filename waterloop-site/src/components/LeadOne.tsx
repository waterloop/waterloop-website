import React from "react";
import styled from "styled-components";
import LeadGooseOne from '../images/LeadGoose.png';
import LeadGithub1 from '../images/BigGithub.png';
import LeadLinkedin1 from '../images/BigLinkedIn.png';
import "./styling/TestComponent.css";
import TitleText from "./TitleText";
import PositionText from "./PositionText";



const FlexContainerOutside = styled.div`
    display: flex;
    justify-content: space-evenly;
    list-style:none;
`
const FlexContainerInside = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 27%;
`

const GitLinkBox = styled.div`
    display: flex;
    flex-basis: 27%;
`

const WrapperOne = styled.div`
    border: 1.5px solid #fbc531;
    border-radius: 25px 0px;

`
const TitleTitle = styled.div`
width: 167.47px;
height: 74.31px;
left: 488.22px;
top: 370.65px;
margin-left: 14px;
`

const PositionPosition = styled.div`
width: 167.47px;
height: 58.78px;
left: 487.11px;
top: 520.21px;
margin-left: 14px;
`
const GitWrap = styled.div`
width: 30.17px;
height: 30.17px;
left: 486.68px;
top: 600px;
margin-left: 14px;
`
const LinkedInWrap = styled.div`
width: 30.17px;
height: 30.17px;
left: 529.92px;
top: 600px;
margin-left: 10px;
`

type MyProps = {link: string, title: string};

class Geese extends React.Component <MyProps> {
  render() {
    return (
        <div>
        <FlexContainerOutside>

        <FlexContainerInside>
        <WrapperOne>
      <img src={LeadGooseOne}/>
      </WrapperOne>
      </FlexContainerInside>

      <FlexContainerInside>

      <TitleTitle><TitleText/></TitleTitle>
      <p></p>
      <PositionPosition><PositionText/></PositionPosition>      
      
       
        <FlexContainerInside>
            <GitLinkBox>
      <GitWrap><img src={LeadGithub1}/></GitWrap>
      <LinkedInWrap><img src={LeadLinkedin1}/></LinkedInWrap>
      </GitLinkBox>
      </FlexContainerInside>
      

      </FlexContainerInside>

      </FlexContainerOutside>
      
      </div>
      
    );
  }
}

export default Geese;
