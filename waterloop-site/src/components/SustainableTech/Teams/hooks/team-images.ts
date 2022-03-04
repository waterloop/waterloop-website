import React, { useCallback, useState } from 'react';

import TeamContent from '../../../../static/copy/SustainableTech/Teams.json';
interface Image {
  imgPath: string;
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

const imgs: Image[] = TeamContent;

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
    name: imgs[currentIndex].name,
    desc: imgs[currentIndex].desc,
    imgs: imgs,
    currentTeam: currentIndex,
    cycleRight,
    cycleLeft,
    selectTeam,
  };
};

export default useTeamImages;
