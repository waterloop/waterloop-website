import React from 'react';

import styled from 'styled-components'
import useGeeseImages from './hooks/geese-images';

const Name = styled.div`
font-family: IBM Plex Sans;
font-style: italic;
font-weight: 500;
font-size: 36px;
line-height: 47px;
text-align: center;

color: #C4C4C4;
`

const Description = styled.div`
font-family: IBM Plex Sans;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 31px;
display: flex;
align-items: center;
text-align: justify;

color: #010101;
`

const Arrow = styled.i`
  font-size: 48px;
  cursor: pointer;
`;

const ImageCarousel: React.FC = () => {

  const containerStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
  }
  const arrowStyles: React.CSSProperties = {
    fontSize: 48,
    cursor: 'pointer',
  }

  const {
    image,
    name,
    desc,
    cycleLeft,
    cycleRight,
  } = useGeeseImages();


  return (
    <div>
      <div style={containerStyles}>
        <Arrow
          className="material-icons"
          onClick={cycleLeft}
        >
          keyboard_arrow_left
        </Arrow>
        <img src={image} alt="Goose Pick" />
        <Arrow
          className="material-icons"
          onClick={cycleRight}
        >
          keyboard_arrow_right
        </Arrow>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Name>{name}</Name>
        <Description>
          {desc}
        </Description>
      </div>
    </div>
  )
}

export default ImageCarousel;


