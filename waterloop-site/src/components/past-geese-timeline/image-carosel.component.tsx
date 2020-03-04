import React from 'react';

// To be replaced by an API call. Mock data for now
// Delete the local files when the API is created
import Goose1 from './goose1.png'
import Goose2 from './goose2.png'
import GooseEx from './goosex.png'

interface Props {
  images: string[]
}

const ImageCarosel: React.FC = (props) => {

  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

  const containerStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center'
  }
  const arrowStyles: React.CSSProperties = {
    fontSize: 48,
    cursor: 'pointer',
  }

  const imgs = [Goose1, Goose2, GooseEx]

  const cycleRight = () => setCurrentIndex((currentIndex + 1) % imgs.length)
  const cycleLeft = () => setCurrentIndex((currentIndex - 1) >= 0 ? currentIndex -1 : imgs.length-1 )

  return (
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
  )
}

export default ImageCarosel;


