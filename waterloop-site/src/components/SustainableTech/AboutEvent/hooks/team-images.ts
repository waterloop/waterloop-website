import React, { useCallback, useState } from 'react';

import goose1 from '../../../../static/img/pgimgs/goose1.png';
import goose2 from '../../../../static/img/pgimgs/goose2.png';
import goose3 from '../../../../static/img/pgimgs/goose3.png';
import goose4 from '../../../../static/img/pgimgs/goose4.png';
import TeamPic from '../../../../static/img/team/team.png';

interface Image {
  imgFile: string;
  name: string;
  desc: string;
}

interface GooseImage {
  image: string;
  name: string;
  desc: string;
  imgs: Image[];
  currentTeam: number;
  selectTeam: (index: number) => () => void;
}

type GooseImagesHook = () => GooseImage;

const imgs: Image[] = [
  {
    imgFile: TeamPic,
    name: 'Waterloop',
    desc:
      'Goose I was the first pod we built! Fitted with huge air tanks and aircasters, it was the first pod in the competition to demonstrate pneumatic levitation, as in the original Hyperloop whitepaper. It also incorporates eddy current brakes, arranged as a Halbach array to maximize lateral magnetic fields. A sturdy aluminum and polycarbonate shell streamlined the pod aerodynamically.',
  },
  {
    imgFile: goose1,
    name: 'Goose I',
    desc:
      'Goose I was the first pod we built! Fitted with huge air tanks and aircasters, it was the first pod in the competition to demonstrate pneumatic levitation, as in the original Hyperloop whitepaper. It also incorporates eddy current brakes, arranged as a Halbach array to maximize lateral magnetic fields. A sturdy aluminum and polycarbonate shell streamlined the pod aerodynamically.',
  },
  {
    imgFile: goose2,
    name: 'Goose II',
    desc:
      'With Goose II, we demonstrated a variation on magnetic propulsion, with permanent magnets arranged in a ring around a rapidly spinning wheel. Shock absorbers and Eddy current brakes allowed us to run at higher speeds and propel ourselves under our own power. The fiberglass shell was our first venture into composites, with a smoothly curved design shaped by nylon stretched over wood.',
  },
  {
    imgFile: goose3,
    name: 'Goose III',
    desc:
      'With Goose III, we incorporated our first full-fledged propulsion system with a simple wheeled-motor design, along with a smaller streamlined frame and shell, while maintaining many previous design elements for simplicity and reliability. A new software system provided redundant control mechanisms across the pod.',
  },
  {
    imgFile: goose4,
    name: 'Goose IV',
    desc:
      'By the fourth competition, we had realized that, despite wheeled propulsion posting record-breaking speeds in the SpaceX Hyperloop tube, there was no way of scaling those systems to transcontinental scale—wheels spinning at Mach 1 simply cannot last. We pivoted to designing a contactless linear induction motor from scratch, and simplified the rest of the pod to allow us to devote the majority of our time on the most difficult research.',
  },
];

const useTeamImages: GooseImagesHook = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const selectTeam = useCallback(
    (index: number) => () => setCurrentIndex(index),
    [setCurrentIndex],
  );

  return {
    image: imgs[currentIndex].imgFile,
    name: imgs[currentIndex].name,
    desc: imgs[currentIndex].desc,
    imgs: imgs,
    currentTeam: currentIndex,
    selectTeam,
  };
};

export default useTeamImages;
