import React from "react";
import styled from "styled-components";

const InfoContainer = styled.div`
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

const NameContainer = styled.div`
font-family: IBM Plex Sans;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 31px;
color: #000000;
`
const BlurbContainer = styled.div`
font-family: IBM Plex Sans;
font-style: normal;
font-weight: 200;
font-size: 20px;
line-height: 26px;
color: #000000;
`

type MyProps = {name: string; blurb: string; contacts: Array<{icon: string, url: string}>};

class Information extends React.Component <MyProps> {
  render() {
    return (
      <InfoContainer >
        <NameContainer>{this.props.name}</NameContainer>
        <BlurbContainer>{this.props.blurb}</BlurbContainer>

        <IconContainer>
          {this.props.contacts.map((contact, i) => {
          return <IconWrapper onClick={(event: any) => {event.stopPropagation()}}>
              <a href={contact.url} target="_blank"><img src={contact.icon} alt="link"/></a>
            </IconWrapper>
          })}
        </IconContainer>

      </InfoContainer>
    );
  }
}

export default Information;
