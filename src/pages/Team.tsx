import React from "react";
import Hero from "components/Hero/General";
import styled from "styled-components";
import OurTeam from "components/OurTeam";
import TeamsDisplayer from "components/TeamsDisplayer";

const ContentContainer = styled.div`
  display: block;
  max-width: 1080px;
  margin: 0 auto;
`;

const Teams: React.FC = () => (
  <div>
    <Hero
      title="MEET THE TEAM"
      description="Den of the Waterloop Geese."
      anchor="#team"
    ></Hero>
    <div id="#team"></div>
    <div className="pageContainer">
      <ContentContainer>
        <OurTeam />
        <TeamsDisplayer initFilterSetting={0} />
      </ContentContainer>
    </div>
  </div>
);

export default Teams;
