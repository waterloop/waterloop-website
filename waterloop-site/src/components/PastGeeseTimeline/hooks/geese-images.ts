import { useCallback, useState } from 'react';

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
    name: 'Goose I',
    desc: 'Goose I was the first pod we built! Fitted with huge air tanks and aircasters, it was the first pod in the competition to demonstrate pneumatic levitation, as in the original Hyperloop whitepaper. It also incorporates eddy current brakes, arranged as a Halbach array to maximize lateral magnetic fields. A sturdy aluminum and polycarbonate shell streamlined the pod aerodynamically.'
  },
  {
    imgFile: goose2,
    name: 'Goose II',
    desc: 'With Goose II, we demonstrated a variation on magnetic propulsion, with permanent magnets arranged in a ring around a rapidly spinning wheel. Shock absorbers and eddy current brakes allowed us to run at higher speeds and propel ourselves under our own power. The fiberglass shell was our first venture into composites, with a smoothly curved design shaped by nylon stretched over wood.'
  },
  {
    imgFile: goosex,
    name: 'Goose III',
    desc: 'With Goose III, we incorporated our first full-fledged propulsion system with a simple wheeled-motor design, along with a smaller streamlined frame and shell, while maintaining many previous design elements for simplicity and reliability. A new software system provided redundant control mechanisms across the pod. @Jimmy I actually completely forget what was on this pod halp'
  },
  {
    imgFile: goosex,
    name: 'Goose IV',
    desc: 'By the fourth competition, we had realized that, despite wheeled propulsion posting record-breaking speeds in the SpaceX Hyperloop tube, there was no way of scaling those systems to transcontinental scale—wheels spinning at Mach 1 simply cannot last. We pivoted to designing a contactless linear induction motor from scratch, and simplified the rest of the pod to allow us to devote the majority of our time on the most difficult research.'
  },
  {
    imgFile: goosex,
    name: 'Goose X',
    desc: 'The second iteration of the linear induction motor-based design significantly simplified the Goose IV design, after many lessons learned from our first LIM-based design, and made it more practical to manufacture. We also moved from a commercial inverter to a custom motor controller board, implemented a working distributed embedded control system, designed an aluminum space frame, and more.'
  },
  {
    imgFile: goosex,
    name: 'Goose VI',
    desc: 'The third LIM iteration will use the same mechanical framework as a testbed, and focus primarily on manufacturability and optimization of the linear induction motor, power conversion, and motor control systems.'
  },
];


const useGeeseImages = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const cycleRight = useCallback(
    () => setCurrentIndex((currentIndex + 1) % imgs.length),
    [setCurrentIndex, currentIndex],
  );

  const cycleLeft = useCallback(
    () => setCurrentIndex((currentIndex - 1) >= 0 ? currentIndex - 1 : imgs.length - 1),
    [setCurrentIndex, currentIndex],
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
