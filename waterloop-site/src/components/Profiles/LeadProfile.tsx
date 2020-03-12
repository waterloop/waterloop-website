import React from "react";
import styled from "styled-components";

import { ContactsType } from './interfaces'

const Container = styled.div`
  display: flex;
  flex-direction: columns;
  justify-content: space-between;
  width: 475px;
  height: 265px;
`
const PortraitContainer = styled.div`
  width: 60%;
  height: 100%;
  border: 1px solid #fbc531;
  border-radius: 25px 0px;
`
const Portrait = styled.img`
  width: 100%;
  height: 100%;
`
const InfoContainer = styled.div`
  width: 35%;
  display: grid;
  grid-row-template: repeat(3, 1fr);
  align-content: space-between;
  font-family: IBM Plex Sans;
  font-style: normal;
  color: #000000;
`
const InfoTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 31px;
`
const InfoPosition = styled.div`
  font-size: 20px;
  line-height: 26px;
`
const ContactListContainer = styled.div`
  display: flex;

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

const ContactList = (props: ContactsType) => {
  return <ContactListContainer>
    {props.contacts.map((item, i) => {
      return <Contact key={i} href={item.url} target="_blank" onClick={(event: any) => {event.stopPropagation()}}>
        <Icon src={item.icon} alt="link"/>
      </Contact>
    })}
  </ContactListContainer>
}

const LeadProfile = (props: any) => {
  return (
    <Container onClick={props.onClick}>
        <PortraitContainer><Portrait src={props.portrait} alt="portrait"/></PortraitContainer>
        <InfoContainer>
          <InfoTitle>{props.name}</InfoTitle>
          <InfoPosition>{props.position}</InfoPosition>
          {props.contacts.length > 0 && <ContactList contacts={props.contacts}/>}
        </InfoContainer>
    </Container>
  );
}

export default LeadProfile;
