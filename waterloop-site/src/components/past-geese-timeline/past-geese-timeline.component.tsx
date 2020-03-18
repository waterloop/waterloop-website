import React, {useEffect} from 'react';
import styled from 'styled-components';

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

  const Heading = styled.div`
    font-family: IBM Plex Sans;
    font-style: italic;
    font-weight: 600;
    font-size: 48px;
    line-height: 62px;

    color: #010101;
  `

  return (
    <div style={{paddingLeft: '160px'}}>
      <Heading>
        Past Geese
      </Heading>
      <ImageCarosel cycleLeft={cycleLeft} cycleRight={cycleRight} imgs={imgs} currentIndex={currentIndex}/>
    </div>
  )
}

export default PastGeeseTimeline
