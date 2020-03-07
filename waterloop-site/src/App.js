import React from 'react';
import './App.css';
import styled from "styled-components";
import ProfileP from "./components/Profile";

const FlexContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    list-style:none;
`

function App() {
  return (
    <div className="App">

      <FlexContainer>
        <ProfileP/>        
      </FlexContainer>
      
      </div>
  );
}

export default App;
