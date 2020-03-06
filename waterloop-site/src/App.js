import React from 'react';
import './App.css';
import Geese from "./components/LeadOne.tsx";
import SubGeese1 from "./components/SubOne";
import styled from "styled-components";

const FlexContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    list-style:none;
`
const TeamTitle = styled.div`
  width: 209.15px;
height: 54.3px;
margin-right: 1030px;
margin-top: 17px;
margin-bottom: 10px;

font-family: IBM Plex Sans;
font-style: italic;
font-weight: 600;
font-size: 36px;
line-height: 350px;

color: #010101;
`

const SubTeamTitle1 = styled.div`
  width: 209.15px;
height: 54.3px;
margin-right: 1100px;
margin-top: 17px;
margin-bottom: 10px;

font-family: IBM Plex Sans;
font-style: italic;
font-weight: 600;
font-size: 36px;
line-height: 550px;

color: #010101;
`

const SubTeamTitle2 = styled.div`
  width: 209.15px;
height: 54.3px;
margin-right: 1100px;
margin-top: 17px;
margin-bottom: 10px;

font-family: IBM Plex Sans;
font-style: italic;
font-weight: 600;
font-size: 36px;
line-height: 550px;

color: #010101;
`

const SubTeamTitle3 = styled.div`
  width: 209.15px;
height: 54.3px;
margin-right: 1100px;
margin-top: 17px;
margin-bottom: 10px;

font-family: IBM Plex Sans;
font-style: italic;
font-weight: 600;
font-size: 36px;
line-height: 555px;

color: #010101;
`

const Lead1 = styled.div`
width: 286.57px;
height: 265.46px;
margin-left: 0px;
margin-top: 150px;
`
const Lead2 = styled.div`
width: 286.57px;
height: 265.46px;
margin-left: 0px;
margin-top: 150px;
`
const SubteamOne1 = styled.div`
width: 203.95px;
height: 192.89px;
margin-left: 0px;
margin-top: 247px;
`
const SubteamOne2 = styled.div`
width: 203.95px;
height: 192.89px;
margin-left: 0px;
margin-top: 247px;
`
const SubteamOne3 = styled.div`
width: 203.95px;
height: 192.89px;
margin-left: 0px;
margin-top: 247px;
`
const SubteamOne4 = styled.div`
width: 203.95px;
height: 192.89px;
margin-left: 0px;
margin-top: 107px;
`
const SubteamOne5 = styled.div`
width: 203.95px;
height: 192.89px;
margin-left: 0px;
margin-top: 107px;
`
const SubteamOne6 = styled.div`
width: 203.95px;
height: 192.89px;
margin-left: 0px;
margin-top: 107px;
`


function App() {
  return (
    <div className="App">
      <FlexContainer>
        <TeamTitle>Team Leads</TeamTitle>
      </FlexContainer>
      <FlexContainer>      
       <Lead1><Geese/></Lead1>   
       <Lead2><Geese/></Lead2>          
      </FlexContainer>
      

      <FlexContainer>
        <SubTeamTitle1>Sub Team 1</SubTeamTitle1>
      </FlexContainer>
      <FlexContainer>
        <SubteamOne1><SubGeese1/></SubteamOne1>
        <SubteamOne2><SubGeese1/></SubteamOne2>
        <SubteamOne3><SubGeese1/></SubteamOne3>
        </FlexContainer>
        <FlexContainer>
        <SubteamOne4><SubGeese1/></SubteamOne4>
        <SubteamOne5><SubGeese1/></SubteamOne5>
        <SubteamOne6><SubGeese1/></SubteamOne6>
      </FlexContainer>

      <FlexContainer>
        <SubTeamTitle2>Sub Team 2</SubTeamTitle2>
      </FlexContainer>
      <FlexContainer>
        <SubteamOne1><SubGeese1/></SubteamOne1>
        <SubteamOne2><SubGeese1/></SubteamOne2>
        <SubteamOne3><SubGeese1/></SubteamOne3>
        </FlexContainer>
        <FlexContainer>
        <SubteamOne4><SubGeese1/></SubteamOne4>
        <SubteamOne5><SubGeese1/></SubteamOne5>
        <SubteamOne6><SubGeese1/></SubteamOne6>
      </FlexContainer>


      <FlexContainer>
        <SubTeamTitle3>Sub Team 3</SubTeamTitle3>
      </FlexContainer>
      <FlexContainer>
        <SubteamOne1><SubGeese1/></SubteamOne1>
        <SubteamOne2><SubGeese1/></SubteamOne2>
        <SubteamOne3><SubGeese1/></SubteamOne3>
        </FlexContainer>
        <FlexContainer>
        <SubteamOne4><SubGeese1/></SubteamOne4>
        <SubteamOne5><SubGeese1/></SubteamOne5>
        <SubteamOne6><SubGeese1/></SubteamOne6>
      </FlexContainer>

      {/*
      <FlexContainer>
        <SubteamTwo1><SubGeese1/></SubteamTwo1>
        <SubteamTwo2><SubGeese1/></SubteamTwo2>
        <SubteamTwo3><SubGeese1/></SubteamTwo3>
        </FlexContainer>
        <FlexContainer>
        <SubteamTwo4><SubGeese1/></SubteamTwo4>
        <SubteamTwo5><SubGeese1/></SubteamTwo5>
        <SubteamTwo6><SubGeese1/></SubteamTwo6>
      </FlexContainer>

      <FlexContainer>
        <SubteamTwo1><SubGeese1/></SubteamTwo1>
        <SubteamTwo2><SubGeese1/></SubteamTwo2>
        <SubteamTwo3><SubGeese1/></SubteamTwo3>
        </FlexContainer>
        <FlexContainer>
        <SubteamTwo4><SubGeese1/></SubteamTwo4>
        <SubteamTwo5><SubGeese1/></SubteamTwo5>
        <SubteamTwo6><SubGeese1/></SubteamTwo6>
      </FlexContainer>
      */}
      </div>
  );
}

export default App;
