import React from "react";
import styled from "styled-components";
import LeadGooseOne from '../images/LeadGoose.png';
import Information from "./Information";


const Container = styled.div`
display: flex;
width: 475px;
height: 266px;
`

const WrapperProfile = styled.div`
    border: 1.5px solid #fbc531;
    border-radius: 25px 0px;
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

//type MyProps = {name: string; position: string; image: string};

class ProfileP extends React.Component {
  render() {
    return (
        
        
        <Container>
        <div>
        <WrapperProfile>
      <img src={LeadGooseOne}/>
      </WrapperProfile>    
      </div>

      
      <Information name="A Potentially Very Long Name" position="Papa Goose is the Supreme Leader" />
      
      </Container>
      
      
    );
  }
}

export default ProfileP;
