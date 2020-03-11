import React from "react";
import styled from "styled-components";
import Information from "./Information";

const Container = styled.div`
  display: flex;
  width: 475px;
  height: 266px;
`
const WrapperProfile = styled.div`
  width: 67%;
  height: 100%;
  border: 1.5px solid #fbc531;
  border-radius: 25px 0px;
`
const Portrait = styled.img`
  max-width:100%;
  max-height:100%;
`

const LeadProfile = (props: any) => {
  return (
    <Container onClick={props.onClick}>
        <WrapperProfile><Portrait src={props.portrait} alt="portrait"/></WrapperProfile>
        <Information
          name={props.name}
          position={props.position}
          contacts={props.contacts}
        />
    </Container>
  );
}

export default LeadProfile;
