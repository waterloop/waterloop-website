import React from 'react';

import styles from 'styled-components'

interface Props {
  currentIndex: number;
  cycleLeft: () => void;
  cycleRight: () => void;
  imgs: string[];
  descs: string[];
  names: string[];
}



const ImageCarosel: React.FC<Props> = ({currentIndex, cycleLeft, cycleRight, imgs, descs, names}) => {



  const containerStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center'
  }
  const arrowStyles: React.CSSProperties = {
    fontSize: 48,
    cursor: 'pointer',
  }

  const Name = styles.div`
    font-family: IBM Plex Sans;
    font-style: italic;
    font-weight: 500;
    font-size: 36px;
    line-height: 47px;
    text-align: center;

    color: #C4C4C4;
  `

  const Description = styles.div`
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 31px;
    display: flex;
    align-items: center;
    text-align: justify;

    color: #010101;
  `



  return (
    <div>
      <div style={containerStyles}>
        <i
          className="material-icons"
          style={arrowStyles}
          onClick={cycleLeft}
        >
          keyboard_arrow_left
        </i>
        <img src={imgs[currentIndex]}  alt="Goose Pick"/>
        <i
          className="material-icons"
          style={arrowStyles}
          onClick={cycleRight}
        >
          keyboard_arrow_right
        </i>
      </div>
      <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <Name>{names[currentIndex]}</Name>
        <Description>
          {descs[currentIndex]}
        </Description>
      </div>
    </div>
  )
}

export default ImageCarosel;


