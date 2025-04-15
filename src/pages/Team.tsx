import React from "react";
import Hero from "components/Hero/General";
import styled from "styled-components";
import OurTeam from "components/OurTeam";
import { TextWithImage } from "components";
import { MyProps } from "components/TextWithImage";
//import TeamsDisplayer from "components/TeamsDisplayer";
//import WebText from "static/copy/Team/web.json";
//import AdminText from "static/copy/Team/admin.json";
import ElecText from "static/copy/Team/electrical.json";
import ExecText from "static/copy/Team/exec.json";
//import InfraText from "static/copy/Team/infrastructure.json";
import MechText from "static/copy/Team/mech.json";
import SoftwareText from "static/copy/Team/software.json";
import LeadText from "static/copy/Team/teamleads.json";
//import propulsionLeads from "static/img/team/propulsion_leads.png";
import mechLeads from "static/img/team/mech_leads.png";
import firmwareLeads from "static/img/team/firmware_leads.png";
import elecLeads from "static/img/team/elec_leads.png";
import PMS from "static/img/team/PMS.png";

//const webText: MyProps [] = WebText
//const adminText: MyProps [] = AdminText
const elecText: MyProps [] = ElecText
const execText: MyProps [] = ExecText
//const infraText: MyProps [] = InfraText
const mechText: MyProps [] = MechText
const softwareText: MyProps [] = SoftwareText
const leadText: MyProps [] = LeadText
//const propulsionImg : string[] = [propulsionLeads]
const mechImg : string[] = [mechLeads]
const firmwareImg : string[] = [firmwareLeads]
const elecImg : string[] = [elecLeads]
const PmsImg : string[] = [PMS]

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
      {
        /*
      <TextWithImage
          data={webText}
          textPos={"left"}
          imgData={propulsionImg}
      ></TextWithImage>
      <TextWithImage
          data={adminText}
          textPos={"right"}
          imgData={propulsionImg}
      ></TextWithImage>
      */
      }
      <TextWithImage
          data={leadText}
          textPos={"left"}
          imgData={PmsImg}
      ></TextWithImage>
      <TextWithImage
          data={execText}
          textPos={"right"}
          imgData={PmsImg}
      ></TextWithImage>
      <TextWithImage
          data={elecText}
          textPos={"left"}
          imgData={elecImg}
      ></TextWithImage>

      {/*
      <TextWithImage
          data={infraText}
          textPos={"left"}
          imgData={propulsionImg}
      ></TextWithImage>
      */
      }
      <TextWithImage
          data={mechText}
          textPos={"right"}
          imgData={mechImg}
      ></TextWithImage>
      <TextWithImage
          data={softwareText}
          textPos={"left"}
          imgData={firmwareImg}
      ></TextWithImage>\
    </div>
  </div>
);

export default Teams;
