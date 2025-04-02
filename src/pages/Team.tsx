import React from "react";
import Hero from "components/Hero/General";
import styled from "styled-components";
import OurTeam from "components/OurTeam";
import { TextWithImage } from "components";
import { MyProps } from "components/TextWithImage";
import { TextWithProfileImage } from "components";
//import TeamsDisplayer from "components/TeamsDisplayer";
import WebText from "static/copy/Team/web.json";
import AdminText from "static/copy/Team/admin.json";
import ElecText from "static/copy/Team/electrical.json";
import ExecText from "static/copy/Team/exec.json";
import InfraText from "static/copy/Team/infrastructure.json";
import MechText from "static/copy/Team/mech.json";
import SoftwareText from "static/copy/Team/software.json";
import LeadText from "static/copy/Team/teamleads.json";
import propulsionLeads from "static/img/team/propulsion_leads.png";
const webText: MyProps [] = WebText
const adminText: MyProps [] = AdminText
const elecText: MyProps [] = ElecText
const execText: MyProps [] = ExecText
const infraText: MyProps [] = InfraText
const mechText: MyProps [] = MechText
const softwareText: MyProps [] = SoftwareText
const leadText: MyProps [] = LeadText
const webImg : string[] = [propulsionLeads]

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
        {//<TeamsDisplayer initFilterSetting={0} /> TODO: uncomment me when teamhub roster has been updated properly. */
        }
      </ContentContainer>
      <TextWithProfileImage
          data={webText}
          textPos={"left"}
          imgData={webImg}
      ></TextWithProfileImage>
      <TextWithImage
          data={adminText}
          textPos={"right"}
          imgData={webImg}
      ></TextWithImage>
      <TextWithImage
          data={elecText}
          textPos={"left"}
          imgData={webImg}
      ></TextWithImage>
      <TextWithImage
          data={execText}
          textPos={"right"}
          imgData={webImg}
      ></TextWithImage>
      <TextWithImage
          data={infraText}
          textPos={"left"}
          imgData={webImg}
      ></TextWithImage>
      <TextWithImage
          data={mechText}
          textPos={"right"}
          imgData={webImg}
      ></TextWithImage>
      <TextWithImage
          data={softwareText}
          textPos={"left"}
          imgData={webImg}
      ></TextWithImage>
      <TextWithImage
          data={leadText}
          textPos={"right"}
          imgData={webImg}
      ></TextWithImage>
    </div>
  </div>
);

export default Teams;
