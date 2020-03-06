import React from "react";
import styled from "styled-components";
import SubGooseOne from '../images/BabyGoose.png';
import SubGithub1 from '../images/SmallGithub.png';
import SubLinkedin1 from '../images/SmallLinkedin.png';
import "./styling/TestComponent.css";
import SubTitleText from "./SubTitleText";
import SubPositionText from "./SubPositionText";



const FlexContainerOutside1 = styled.div`
    display: flex;
    justify-content: space-evenly;
    list-style:none;
`
const FlexContainerInside1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-basis: 27%;
`

const GitLinkBox1 = styled.div`
    display: flex;
    flex-basis: 27%;
`

const WrapperOne1 = styled.div`
    border: 1.5px solid #fbc531;
    border-radius: 25px 0px;

`
const TitleTitle1 = styled.div`
width: 99.44px;
height: 53.78px;
left: 401.02px;
top: 886.9px;
margin-left: 10px;
`

const PositionPosition1 = styled.div`
width: 99.44px;
height: 42.54px;
left: 400.36px;
top: 965px;
margin-left: 10px;
`
const GitWrap1 = styled.div`
width: 17.91px;
height: 21.83px;
left: 400.11px;
top: 1046.98px;
margin-left: 10px;
`
const LinkedInWrap1 = styled.div`
width: 17.91px;
height: 21.83px;
left: 425.78px;
top: 1046.25px;
margin-left:7px;
`

type MyProps = {link: string, title: string};

class SubGeese1 extends React.Component <MyProps> {
  render() {
    return (
        <div>
        <FlexContainerOutside1>

        <FlexContainerInside1>
        <WrapperOne1>
      <img src={SubGooseOne}/>
      </WrapperOne1>
      </FlexContainerInside1>

      <FlexContainerInside1>

      <TitleTitle1><SubTitleText/></TitleTitle1>
      <p></p>
      <PositionPosition1><SubPositionText/></PositionPosition1>      
      
       
        <FlexContainerInside1>
            <GitLinkBox1>
      <GitWrap1><img src={SubGithub1}/></GitWrap1>
      <LinkedInWrap1><img src={SubLinkedin1}/></LinkedInWrap1>
      </GitLinkBox1>
      </FlexContainerInside1>
      

      </FlexContainerInside1>

      </FlexContainerOutside1>
      
      </div>
      
    );
  }
}

export default SubGeese1;
