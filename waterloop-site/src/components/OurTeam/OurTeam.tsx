import React from "react";
import styled from "styled-components";
import { Button } from "components";
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
  padding: 36px 0 36px;

  @media screen and (max-width: $mobile) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

const OurTeam = () => {
  return (
    <OurTeamContainer>
      <h2>Our Team</h2>
      <p>
        Our team is a diverse group of student volunteers from all faculties.
        Whether it’s laying out a test board design to evaluate a high power
        electrical component, simulating the magnetic effects of a change in
        motor geometry, writing a reliable embedded communication driver, or
        creating media and content to increase adoption of the Hyperloop
        concept, we’re united in the pursuit of building and learning amazing
        things together.
      </p>
      <p>
        Interested in joining? We’re always looking for dedicated team members
        to help us make the vision of Hyperloop a reality, and we work hard to
        provide an effective mentorship experience for all new team members.
      </p>
      <TeamPhoto src={Team} alt="some team photo" />
      <div className="centerDiv">
        <Button
          backgroundColor="yellow"
          textColor="black"
          text={"SEE OPENINGS"}
          onClick={() => window.open("/recruitment", "_self")}
          variant={null}
        />
      </div>
    </OurTeamContainer>
  );
};

export default OurTeam;
