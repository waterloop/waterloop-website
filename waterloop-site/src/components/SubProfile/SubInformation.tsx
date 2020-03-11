import React from "react";
import styled from "styled-components";

const SubInfoContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding-left: 13px;
width: 40%;
height: 100%;
`
const SubIconContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const SubIconWrapper = styled.div`
  padding-right: 6px;
`

const SubNameContainer = styled.div`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  color: #000000;
`
const SubPositionContainer = styled.div`
font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 18px;
  color: #000000;
`

type MyProps = {name: string; position: string; contacts: Array<{icon: string, url: string}>};

class SubInformation extends React.Component <MyProps> {
  render() {
    return (
      <SubInfoContainer >
        <SubNameContainer>{this.props.name}</SubNameContainer>
        <SubPositionContainer>{this.props.position}</SubPositionContainer>

        <SubIconContainer>
          {this.props.contacts.map((contact, i) => {
          return <SubIconWrapper onClick={(event: any) => {event.stopPropagation()}}>
              <a href={contact.url}><img src={contact.icon} alt="link"/></a>
            </SubIconWrapper>
          })}
        </SubIconContainer>

      </SubInfoContainer>
    );
  }
}

export default SubInformation;
