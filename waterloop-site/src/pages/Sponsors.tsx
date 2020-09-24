import React from "react";
import Hero from "components/Hero/General";
import SponsorList from "components/Sponsor/SponsorPage";
import { TextWithImage } from "components/TextWithImage";
import { MyProps } from "components/TextWithImage";
import Text from "static/copy/Sponsors/Sponsors.json";
import SponsorsImg from "../static/img/team/sponsors.png";
import "../theme/styles.scss";

const castData: MyProps[] = Text;
const imgData: string[] = [SponsorsImg];

const Sponsors: React.FC = () => (
  <div>
    <Hero
      title="SUPPORT OUR TEAM"
      description="Help fund the future"
      anchor="#sponsor-list"
    ></Hero>
    <div id="#sponsor-list"></div>
    <div className="pageContainer">
      <TextWithImage
        data={castData}
        textPos="alternate"
        imgData={imgData}
      ></TextWithImage>
      <SponsorList />
    </div>
  </div>
);

export default Sponsors;
