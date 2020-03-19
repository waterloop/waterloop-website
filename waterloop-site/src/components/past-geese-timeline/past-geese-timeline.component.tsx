import React, {useEffect} from 'react';
import styled from 'styled-components';

import ImageCarosel from './image-carosel.component'
import { getGeese } from '../../api/imgs'

const PastGeeseTimeline: React.FC = () => {

  const [imgs, setImages] = React.useState<string[]>([])
  const [descs, setDescs] = React.useState<string[]>([])
  const [names, setNames] = React.useState<string[]>([])
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const cycleRight = () => setCurrentIndex((currentIndex + 1) % imgs.length)
  const cycleLeft = () => setCurrentIndex((currentIndex - 1) >= 0 ? currentIndex -1 : imgs.length-1 )

  useEffect(() => {
    getGeese().then((response) => {
      setImages(response.geese.map((value) => value.url))
      setDescs(response.geese.map((value) => value.desc))
      setNames(response.geese.map((value) => value.name))
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
    <div style={{position: 'absolute'}}>
      <Heading>
        Past Geese
      </Heading>
      <ImageCarosel names={names} descs={descs} cycleLeft={cycleLeft} cycleRight={cycleRight} imgs={imgs} currentIndex={currentIndex}/>
    </div>
  )
}

export default PastGeeseTimeline
