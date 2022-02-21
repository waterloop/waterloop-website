import React from "react";
import { NavPopup } from "components/NavPopup";
import Hero from "components/Hero/Landing";
import { Sponsors } from "components/SponsorsLanding";
import { ImgJSON } from "components/SponsorsLanding";
import { TextWithImage, MyProps } from "components/TextWithImage";
import { ColumnBlock, Props } from "components/ColumnBlock";
import Text from "static/copy/Landing/TextWithImage.json";
import ColText from "static/copy/Landing/ColumnBlock.json";
import "../theme/styles.scss";
// Images for sponsors:
import Brent from "../static/img/official-sponsors/BrentsWeldingAndFab.png";
import Weef from "../static/img/official-sponsors/weef.jpg";
import WaterlooEng from "../static/img/official-sponsors/wes.jpg";
import UW from "../static/img/official-sponsors/foe.jpg";
import ClickUp from "../static/img/official-sponsors/ClickUp.png";
import WCBranham from "../static/img/official-sponsors/WCBranham.png";

import Goals from "../static/img/landing/textwithimage/goals.png";
import Competition from "../static/img/landing/textwithimage/competition.png";

const castData: MyProps[] = Text;
const imgData: string[] = [Goals, Competition];
const ColData: Props[] = ColText;

// Place data here:
const imgJSON: ImgJSON[] = [
  { imgSrc: Brent, imgAlt: "Brent" },
  { imgSrc: Weef, imgAlt: "Weef" },
  { imgSrc: WaterlooEng, imgAlt: "WaterlooEng" },
  { imgSrc: UW, imgAlt: "UW" },
  { imgSrc: ClickUp, imgAlt: "ClickUp" },
  { imgSrc: WCBranham, imgAlt: "WCBranham" },
];

const Home: React.FC = () => (
  <div>
    <NavPopup/>
    <Hero description="A faster look on the future." anchor="#home"></Hero>

    <div className="pageContainer">
      <div id={"#home"}></div>
      <TextWithImage
        data={castData}
        textPos={"alternate"}
        imgData={imgData}
      ></TextWithImage>
    </div>
    <div className="break"></div>
    <ColumnBlock data={ColData} imgData={imgData} />
    <div className="pageContainer">
      <div className="break"></div>
      <Sponsors data={imgJSON} />
    </div>
  </div>
);

export default Home;
