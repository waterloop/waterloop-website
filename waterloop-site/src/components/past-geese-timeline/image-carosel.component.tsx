import React from 'react';

interface Props {
  currentIndex: number;
  cycleLeft: () => void;
  cycleRight: () => void;
  imgs: string[]
}

const ImageCarosel: React.FC<Props> = ({currentIndex, cycleLeft, cycleRight, imgs}) => {



  const containerStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center'
  }
  const arrowStyles: React.CSSProperties = {
    fontSize: 48,
    cursor: 'pointer',
  }



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


