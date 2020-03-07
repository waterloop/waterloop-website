import React from "react";
import styled from "styled-components";
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

const ProfileP = (props: any) => {
  return (
    <Container>
        <WrapperProfile><img src={props.data.portrait}/></WrapperProfile>    
        <Information 
          name={props.data.name} 
          blurb={props.data.blurb}
          icons={props.data.icons}
        />
    </Container>
  );
}

export default ProfileP;
