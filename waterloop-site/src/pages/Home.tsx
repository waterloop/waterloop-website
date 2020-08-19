import React from "react";
import Hero from "components/Hero/Landing";
import { Sponsors } from "components/SponsorsLanding";
import { ImgJSON } from "components/SponsorsLanding";
import { TextWithImage } from "components/TextWithImage";
import { MyProps } from "components/TextWithImage";
import Text from "static/copy/Landing.json";
import "../theme/styles.scss";

// Images for sponsors:
import Brent from "../static/img/official-sponsors/BrentsWeldingAndFab.png"
import Weef from "../static/img/official-sponsors/weef.jpg";
import WaterlooEng from "../static/img/official-sponsors/wes.jpg";
import UW from "../static/img/official-sponsors/foe.jpg";
import ClickUp from "../static/img/official-sponsors/ClickUp.png";
import WCBranham from "../static/img/official-sponsors/WCBranham.png";

import Goals from "../static/img/landing/textwithimage/goals.png";
import Competition from "../static/img/landing/textwithimage/competition.png";

const castData: MyProps[] = Text;
const imgData: string[] = [Goals, Competition];

// Place data here:
const imgJSON: ImgJSON[] = [
  { imgSrc: Brent, imgAlt: "Placeholder" },
  { imgSrc: Weef, imgAlt: "Placeholder" },
  { imgSrc: WaterlooEng, imgAlt: "Placeholder" },
  { imgSrc: UW, imgAlt: "Placeholder" },
  { imgSrc: ClickUp, imgAlt: "Placeholder" },
  { imgSrc: WCBranham, imgAlt: "Placeholder" },
];

class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero description="A faster look on the future." anchor="#home"></Hero>
        <div id={"#home"}></div>
        <div className="pageContainer">
          <TextWithImage
            data={castData}
            textPos={"alternate"}
            imgData={imgData}
          ></TextWithImage>
          <div className="break"></div>
          <Sponsors data={imgJSON} />
        </div>
      </div>
    );
  }
}

export default Home;
