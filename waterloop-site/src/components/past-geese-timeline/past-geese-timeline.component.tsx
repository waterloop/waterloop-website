import React from 'react';

import ImageCarosel from './image-carosel.component'

const PastGeeseTimeline: React.FC = () => {

  // TODO useEffect to load in the imgs
  const [images, setImages] = React.useState([])
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const cycleRight = () => setCurrentIndex((currentIndex + 1) % imgs.length)
  const cycleLeft = () => setCurrentIndex((currentIndex - 1) >= 0 ? currentIndex -1 : imgs.length-1 )

  return (
    <>
      <ImageCarosel cycleLeft={cycleLeft} cycleRight={cycleRight} imgs={imgs} currentIndex={currentIndex}/>
    </>
  )
}

export default PastGeeseTimeline
