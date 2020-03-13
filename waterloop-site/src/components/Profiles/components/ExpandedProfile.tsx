import React from "react";
import styled from "styled-components";

import { ContactsType } from '../interfaces'

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: columns;
  justify-content: space-between;
  max-width: 1080px;

  @media (max-width: 975px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 475px;
  }
`
const PortraitContainer = styled.div`
  display: flex;
  width: 475px;
  height: 475px;
  border: 1px solid #fbc531;
  border-radius: 25px 0px;

  @media (max-width: 975px) {
    width: 100%;
    margin-bottom: 40px;
  }
`
const Portrait = styled.img`
  width: 100%;
  height: 100%;
`
const InfoContainer = styled.div`
  display: block;
  flex-basis: 53%;
  font-family: IBM Plex Sans;
  font-style: normal;
  color: #000000;

  @media (max-width: 975px) {
    flex-basis: 100%;
  }
`
const InfoTitle = styled.div`
  flex-basis: 100%;
  font-weight: bold;
  font-size: 33px;
  margin-bottom: 30px;
`
const RoleSummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-basis: 100%;

  & > div {
    font-weight: 500px;
    font-size: 20px;
    margin-bottom: 30px;
  }
`
const InfoPosition = styled.div`
  flex-basis: 50%;
  margin-bottom: 30px;
`
const InfoTeams = styled.div`
  flex-basis: 100%;
`
const InfoBlurb = styled.div`
  flex-basis: 100%;
  font-size: 20px;
  margin-bottom: 30px;
`
const ContactListContainer = styled.div`
  display: flex;
  align-content: flex-end;
  flex-direction: columns;

  @media (min-width: 975px) {
    position: absolute;
    bottom: 0;
  }
`
const Contact = styled.a`
  padding-right: 10px;
  height: 30px;
  width: 30px;
`
const Icon = styled.img`
  max-height: 100%;
  max-width: 100%;
`

// List of icons for contact purposes
const ContactList = (props: ContactsType) => {
  return <ContactListContainer>
    {props.contacts.map((item, i) => {
      return <Contact key={i} href={item.url} target="_blank" onClick={(event: any) => {event.stopPropagation()}}>
        <Icon src={item.icon} alt="link"/>
      </Contact>
    })}
  </ContactListContainer>
}

const ExpandedProfile = (props: any) => {
  return (
    <Container onClick={props.onClick}>
        <PortraitContainer><Portrait src={props.portrait} alt="portrait"/></PortraitContainer>
        <InfoContainer>
          <InfoTitle>{props.name}</InfoTitle>
          <RoleSummaryContainer>
            <InfoPosition>{props.position}</InfoPosition>
            <InfoPosition>4A Mechatronics Engineering</InfoPosition>
            <InfoTeams>Teams: Finances, Motor, Web</InfoTeams>
          </RoleSummaryContainer>

          <InfoBlurb>Papa Goose is the supreme ruler and founder of the V1 geese tribe. He is known to be grazing the grasses everyday from 6am to 12am in a mission to make the grasses a goosey experience for all. Papa goose will graduate from University of Waterloo in 2022 with a 4.0 GPA</InfoBlurb>
          {props.contacts.length > 0 && <ContactList contacts={props.contacts}/>}
        </InfoContainer>
    </Container>
  );
}

export default ExpandedProfile;
