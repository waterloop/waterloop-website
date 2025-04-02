import React from "react";
import Hero from "components/Hero/General";
//import SponsorList from "components/Sponsor/SponsorPage";
import { SponsorsLanding } from 'components/SponsorsLanding';
import { TextWithImage } from "components/TextWithImage";
import { MyProps } from "components/TextWithImage";
import Text from "static/copy/Sponsors/Sponsors.json";
import SponsorsImg from "../static/img/team/sponsors.png";
import "../theme/styles.scss";
import { ImgJSON } from 'components/SponsorsLanding';
//import ColText from 'static/copy/Landing/ColumnBlock.json';

// Images for sponsors:
import Weef from '../static/img/official-sponsors/weef.jpg';
import WaterlooEng from '../static/img/official-sponsors/wes.jpg';
import UW from '../static/img/official-sponsors/foe.jpg';
import Altium from '../static/img/official-sponsors/altium.png';
import Ansys from '../static/img/official-sponsors/ansys.png';
import BILD from '../static/img/official-sponsors/bild.png';
import Dassault from '../static/img/official-sponsors/Dassault-Systems.png';
import Hakko from '../static/img/official-sponsors/hakko.png';
import Keysight from '../static/img/official-sponsors/keysight.jpg';
import Mitutoyo from '../static/img/official-sponsors/mitutoyo_logo.png';
import SKF from '../static/img/official-sponsors/SKF-Logo.png';
import Stantec from '../static/img/official-sponsors/Stantec.png';

const castData: MyProps[] = Text;
const imgData: string[] = [SponsorsImg];
//const ColData: Props[] = ColText;

const imgJSON: ImgJSON[] = [
  { imgSrc: Weef, imgAlt: 'Weef' },
  { imgSrc: WaterlooEng, imgAlt: 'WaterlooEng' },
  { imgSrc: UW, imgAlt: 'UW' },
  { imgSrc: Ansys, imgAlt: 'Ansys' },
  { imgSrc: BILD, imgAlt: 'BILD' },
  { imgSrc: Dassault, imgAlt: 'Dassault' },
  { imgSrc: Hakko, imgAlt: 'Hakko' },
  { imgSrc: Keysight, imgAlt: 'Keysight' },
  { imgSrc: Mitutoyo, imgAlt: 'Mitutoyo' },
  { imgSrc: SKF, imgAlt: 'SKF' },
  { imgSrc: Stantec, imgAlt: 'Stantec' },
  { imgSrc: Altium, imgAlt: 'Altium' },
];

const Sponsors: React.FC = () => (
  <div>
    <Hero
      title="SUPPORT OUR TEAM"
      description="Help fund the future."
      anchor="#sponsor-list"
    ></Hero>
    <div id="#sponsor-list"></div>
    <div className="pageContainer">
      <TextWithImage
        data={castData}
        textPos="alternate"
        imgData={imgData}
      ></TextWithImage>
      <div className="break"></div>
      
      {//<ColumnBlock data={ColData} imgData={imgData} />
      }
      <div className="pageContainer">
        <div className="break"></div>
        <SponsorsLanding data={imgJSON} />
    </div>
      {//<SponsorList />
      }
    </div>
  </div>
);

export default Sponsors;
