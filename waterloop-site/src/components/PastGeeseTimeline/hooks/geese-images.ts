import { useCallback, useState, useEffect } from 'react';

import goose1 from '../../../static/img/pgimgs/goose1.png';
import goose2 from '../../../static/img/pgimgs/goose2.png';
import goosex from '../../../static/img/pgimgs/goosex.png';

interface Image {
  imgFile: string;
  name: string;
  desc: string;
};

const imgs: Image[] = [
  {
    imgFile: goose1,
    name: 'Goose 1',
    desc: 'A description for a Previous Goose'
  },
  {
    imgFile: goose2,
    name: 'Goose 2',
    desc: 'A description for a Previous Goose'
  },
  {
    imgFile: goosex,
    name: 'Goose X',
    desc: 'A description for a Previous Goose'
  },
];


const useGeeseImages = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const cycleRight = useCallback(
    () => setCurrentIndex((currentIndex + 1) % imgs.length),
    [setCurrentIndex, currentIndex, imgs.length],
  );

  const cycleLeft = useCallback(
    () => setCurrentIndex((currentIndex - 1) >= 0 ? currentIndex -1 : imgs.length-1 ),
    [setCurrentIndex, currentIndex, imgs.length],
    );

  return {
    image: imgs[currentIndex].imgFile,
    name: imgs[currentIndex].name,
    desc: imgs[currentIndex].desc,
    cycleRight,
    cycleLeft,
  };
};

export default useGeeseImages;
