import React from "react";
import styled from "styled-components";
import SubInformation from "./SubInformation";

const SubContainer = styled.div`
  display: flex;
  width: 320px;
  height: 192.89px;

  @media (max-width: 1065px){
    width: 475px;
    height: 266px;
  }
`
const WrapperSubProfile = styled.div`
  width: 67%;
  height: 100%;
  border: 1.5px solid #fbc531;
  border-radius: 25px 0px;
`
const Portrait = styled.img`
  max-width:100%;
  max-height:100%;
`

const SubProfile = (props: any) => {
  return (
    <SubContainer onClick={props.onClick}>
        <WrapperSubProfile><Portrait src={props.portrait} alt="portrait"/></WrapperSubProfile>
        <SubInformation
          name={props.name}
          position={props.position}
          contacts={props.contacts}
        />
    </SubContainer>
  );
}

export default SubProfile;
