import React from "react";
import styled from "styled-components";

const OurTeamContainer = styled.div`
  display: block;
  max-width: 1080px;
  margin: 80px auto 80px auto;
`
const TeamDescriptionContainer = styled.h6`
  margin-bottom: 60px;
`
const TeamPhoto = styled.img`
`
const SectionTitle = styled.h5`
  margin-bottom: 50px;
`

const OurTeam = () => {
  return <OurTeamContainer>
    <SectionTitle>Our Team</SectionTitle>
    <TeamDescriptionContainer>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.
    </TeamDescriptionContainer>
    <TeamPhoto src="" alt="some team photo"/>
  </OurTeamContainer>
}

export default OurTeam
