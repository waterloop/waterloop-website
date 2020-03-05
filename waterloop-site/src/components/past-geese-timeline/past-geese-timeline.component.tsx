import React, {useEffect} from 'react';

import ImageCarosel from './image-carosel.component'
import { getGeese } from '../../api/imgs'

const PastGeeseTimeline: React.FC = () => {

  // TODO useEffect to load in the imgs
  const [imgs, setImages] = React.useState<string[]>([])
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const cycleRight = () => setCurrentIndex((currentIndex + 1) % imgs.length)
  const cycleLeft = () => setCurrentIndex((currentIndex - 1) >= 0 ? currentIndex -1 : imgs.length-1 )

  useEffect(() => {
    getGeese().then((response) => {
      setImages([response.goose1, response.goose2, response.goosex])
    })
  }, [])

  return (
    <>
      <ImageCarosel cycleLeft={cycleLeft} cycleRight={cycleRight} imgs={imgs} currentIndex={currentIndex}/>
    </>
  )
}

export default PastGeeseTimeline
