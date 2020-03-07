import React from 'react';
import './App.css';
import styled from "styled-components";
import ProfileP from "./components/LeadProfile/Profile";

import LeadGooseOne from './images/LeadGoose.png';
import LeadGithub from './images/BigGithub.png';
import LeadLinkedIn from './images/BigLinkedIn.png';

const FlexContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    list-style:none;
`

const ProfileData = {
  name: "A Potentially Very Long Name",
  blurb: "Papa Goose is the Alpha of V1 Green",
  portrait: LeadGooseOne,
  icons: [
    {
      image: LeadGithub,
      url: 'http://www.google.com'
    },
    {
      image: LeadLinkedIn,
      url: 'http://www.google.com'
    }
  ]
}

function App() {
  return (
    <div className="App">
      <FlexContainer>
        <ProfileP data={ProfileData}/>        
      </FlexContainer>
      </div>
  );
}

export default App;
