import React, { useCallback, useState } from 'react';

import TeamContent from '../../../../static/copy/SustainableTech/Teams.json';
import WaterloopLogo from '../../../../static/img/logos/Icon_Yellow.png';
import Waterloop from '../../../../static/img/sustainable-tech/waterloop.jpg';
import FormulaLogo from '../../../../static/img/sustainable-tech/uw-formula-logo.png';
import Formula from '../../../../static/img/sustainable-tech/waterloo-formula.jpg';
import UwaftLogo from '../../../../static/img/sustainable-tech/uwaft-logo.png';
import Uwaft from '../../../../static/img/sustainable-tech/uwaft.jpg';
import WarriorLogo from '../../../../static/img/sustainable-tech/warrior-home-logo.png';
import Warrior from '../../../../static/img/sustainable-tech/warrior-home.png';
import MidnightSun from '../../../../static/img/sustainable-tech/midnight-sun.jpg';
import MidnightSunLogo from '../../../../static/img/sustainable-tech/midnight-sun-logo.png';
import SdsnLogo from '../../../../static/img/sustainable-tech/sdsn-logo.jpg';
import Sdsn from '../../../../static/img/sustainable-tech/sdsn.png';
import EnergyNetLogo from '../../../../static/img/sustainable-tech/uw-energy-net-logo.png';
import EnergyNet from '../../../../static/img/sustainable-tech/uw-energy-net.jpg';

interface Image {
  logoPath: string;
  imgPath: string;
}

interface Description {
  name: string;
  desc: string;
}

interface TeamImage {
  image: string;
  name: string;
  desc: string;
  imgs: Image[];
  currentTeam: number;
  cycleRight: React.EffectCallback;
  cycleLeft: React.EffectCallback;
  selectTeam: (index: number) => () => void;
}

type TeamImagesHook = () => TeamImage;

const descriptions: Description[] = TeamContent;

const imgs: Image[] = [
  {
    logoPath: WaterloopLogo,
    imgPath: Waterloop,
  },
  {
    logoPath: FormulaLogo,
    imgPath: Formula,
  },
  {
    logoPath: UwaftLogo,
    imgPath: Uwaft,
  },
  {
    logoPath: MidnightSunLogo,
    imgPath: MidnightSun,
  },
  {
    logoPath: WarriorLogo,
    imgPath: Warrior,
  },
  {
    logoPath: SdsnLogo,
    imgPath: Sdsn,
  },
  {
    logoPath: EnergyNetLogo,
    imgPath: EnergyNet,
  },
];

const useTeamImages: TeamImagesHook = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const cycleRight = useCallback(
    () => setCurrentIndex((currentIndex + 1) % imgs.length),
    [setCurrentIndex, currentIndex],
  );

  const cycleLeft = useCallback(
    () =>
      setCurrentIndex(
        currentIndex - 1 >= 0 ? currentIndex - 1 : imgs.length - 1,
      ),
    [setCurrentIndex, currentIndex],
  );

  const selectTeam = useCallback(
    (index: number) => () => setCurrentIndex(index),
    [setCurrentIndex],
  );

  return {
    image: imgs[currentIndex].imgPath,
    name: descriptions[currentIndex].name,
    desc: descriptions[currentIndex].desc,
    imgs: imgs,
    currentTeam: currentIndex,
    cycleRight,
    cycleLeft,
    selectTeam,
  };
};

export default useTeamImages;
