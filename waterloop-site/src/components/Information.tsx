import React from "react";
import styled from "styled-components";
import LeadGithub1 from '../images/BigGithub.png';
import LeadLinkedin1 from '../images/BigLinkedIn.png';


const AnotherContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding-left: 15px;
`
const IconContainer = styled.div`
display: flex;
flex-direction: row;
`

const IconWrapper = styled.div`
padding-right: 7px;
`

const TitleH2 = styled.div`
font-family: IBM Plex Sans;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 31px;
color: #000000;
`
const PositionP = styled.div`
font-family: IBM Plex Sans;
font-style: normal;
font-weight: 200;
font-size: 20px;
line-height: 26px;
color: #000000;
`

type MyProps = {name: string; position: string};

class Information extends React.Component <MyProps> {
  render() {
    return (
        <AnotherContainer>
        <TitleH2>
        {this.props.name}
        </TitleH2>

        <PositionP>
          {this.props.position}
      </PositionP>
    
    <IconContainer>
      
    <IconWrapper>
    <a href="#"><img src = {LeadGithub1}/></a>
    </IconWrapper>

    <IconWrapper>
    <a href="https://www.google.com/"><img src = {LeadLinkedin1}/></a>
     </IconWrapper> 
     </IconContainer>
    </AnotherContainer>
      
    );
  }
}

export default Information;