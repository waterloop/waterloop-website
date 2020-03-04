import React from 'react';

import ImageCarosel from './image-carosel.component'

// To be replaced by an API call. Mock data for now
// Delete the local files when the API is created
import Goose1 from './goose1.png'
import Goose2 from './goose2.png'
import GooseEx from './goosex.png'

const PastGeeseTimeline: React.FC = () => {

  const imgs = [Goose1, Goose2, GooseEx]
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
