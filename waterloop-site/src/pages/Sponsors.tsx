import React from "react";
import Hero from "components/Hero/General";
import SponsorList from "components/Sponsor/SponsorPage";
import { Button } from "components/Button";
import { TextWithImage } from "components/TextWithImage";
import { MyProps } from "components/TextWithImage";
import Text from 'static/copy/Sponsors.json'
import Goals from '../static/img/landing/textwithimage/goals.png';
import "../theme/global.scss";

const castData: MyProps[] = Text;
const imgData: string[] = [Goals];

class Sponsors extends React.Component {
  render() {
    return (
      <div>
        <Hero
          title="Support Our Team"
          description="Help fund the future."
          anchor="#sponsor-list"
        ></Hero>
        <div id={"#sponsor-list"}></div>
        <div className="pageContainer">
          <TextWithImage data={castData} textPos={"alternate"} imgData={imgData}></TextWithImage>
          <div className="sponsorsButton">
            <Button
              backgroundColor="yellow"
              textColor="black"
              text="SPONSORSHIP PACKAGE"
              onClick={() => window.open("contact")}
              variant={null}
            ></Button>
          </div>
          <div className="break"></div>
          <SponsorList></SponsorList>
        </div>
      </div >
    );
  }
}

export default Sponsors;
