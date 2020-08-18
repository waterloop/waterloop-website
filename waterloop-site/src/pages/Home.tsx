import React from "react";
import Hero from "components/Hero/Landing";
import { Sponsors } from "components/SponsorsLanding";
import { ImgJSON } from "components/SponsorsLanding";
import { TextWithImage } from "components/TextWithImage";
import { MyProps } from "components/TextWithImage";
import Text from "static/copy/Landing.json";
import "../theme/styles.scss";

// Images for sponsors:
import UW_Engineering from "../static/img/sponsors/UW_Engineering.png";
import Test from "../static/img/sponsors/test1.jpg";

import Goals from "../static/img/landing/textwithimage/goals.png";
import Competition from "../static/img/landing/textwithimage/competition.png";

const castData: MyProps[] = Text;
const imgData: string[] = [Goals, Competition];

// Place data here:
const imgJSON: ImgJSON[] = [
  { imgSrc: Test, imgAlt: "Placeholder" },
  { imgSrc: Test, imgAlt: "Placeholder" },
  { imgSrc: Test, imgAlt: "Placeholder" },
  { imgSrc: Test, imgAlt: "Placeholder" },
  { imgSrc: Test, imgAlt: "Placeholder" },
  { imgSrc: Test, imgAlt: "Placeholder" },
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
