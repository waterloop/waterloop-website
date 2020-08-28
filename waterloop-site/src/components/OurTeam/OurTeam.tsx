import React from "react";
import styled from "styled-components";
import Team from "../../static/img/team/team.png";

const OurTeamContainer = styled.div`
  display: block;
  max-width: 1080px;
  margin: 80px auto 80px auto;
`;

const TeamPhoto = styled.img`
  display: flex;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: $mobile) {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-bottom: 20px;
  }
`;

const OurTeam = () => {
  return (
    <OurTeamContainer>
      <h3>Our Team</h3>
      <p>
        Our team is a diverse group of student volunteers from all faculties.
        Whether it’s laying out a test board design to evaluate a high power
        electrical component, simulating the magnetic effects of a change in
        motor geometry, writing a reliable embedded communication driver, or
        creating media and content to increase adoption of the Hyperloop
        concept, we’re united in the pursuit of building and learning amazing
        things together.
        <br /> <br />
        Interested in joining? We’re always looking for dedicated team members
        to help us make the vision of Hyperloop a reality, and we work hard to
        provide an effective mentorship experience for all new team members.
      </p>
      <TeamPhoto src={Team} alt="some team photo" />
    </OurTeamContainer>
  );
};

export default OurTeam;
