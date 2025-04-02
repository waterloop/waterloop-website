import React from 'react';

import Hero from 'components/Hero/Landing';
import { SponsorsLanding } from 'components/SponsorsLanding';
import { ImgJSON } from 'components/SponsorsLanding';
import { TextWithImage, MyProps } from 'components/TextWithImage';
import { ColumnBlock, Props } from 'components/ColumnBlock';
import Text from 'static/copy/Landing/TextWithImage.json';
import ColText from 'static/copy/Landing/ColumnBlock.json';
import '../theme/styles.scss';

// Images for sponsors:
// import Brent from '../static/img/official-sponsors/BrentsWeldingAndFab.png';
import Weef from '../static/img/official-sponsors/weef.jpg';
import WaterlooEng from '../static/img/official-sponsors/wes.jpg';
import UW from '../static/img/official-sponsors/foe.jpg';
// import ClickUp from '../static/img/official-sponsors/ClickUp.png';
// import WCBranham from '../static/img/official-sponsors/WCBranham.png';
import Altium from '../static/img/official-sponsors/altium.png';
import Ansys from '../static/img/official-sponsors/ansys.png';
import BILD from '../static/img/official-sponsors/bild.png';
import Dassault from '../static/img/official-sponsors/Dassault-Systems.png';
import Hakko from '../static/img/official-sponsors/hakko.png';
import Keysight from '../static/img/official-sponsors/keysight.jpg';
import Mitutoyo from '../static/img/official-sponsors/mitutoyo_logo.png';
import SKF from '../static/img/official-sponsors/SKF-Logo.png';
import Stantec from '../static/img/official-sponsors/Stantec.png';

import Goals from '../static/img/landing/textwithimage/goals.png';
import Competition from '../static/img/landing/textwithimage/competition.png';

const castData: MyProps[] = Text;
const imgData: string[] = [Goals, Competition];
const ColData: Props[] = ColText;

// Place data here:
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

const Home: React.FC = () => (
  <div>
    <Hero description="A faster look on the future." anchor="#home"></Hero>

    <div className="pageContainer">
      <div id={'#home'}></div>
      <TextWithImage
        data={castData}
        textPos={'alternate'}
        imgData={imgData}
      ></TextWithImage>
    </div>
    <div className="break"></div>
    <ColumnBlock data={ColData} imgData={imgData} />
    <div className="pageContainer">
      <div className="break"></div>
      <SponsorsLanding data={imgJSON} />
    </div>
  </div>
);

export default Home;
