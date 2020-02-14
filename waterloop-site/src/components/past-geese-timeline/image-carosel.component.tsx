import React from 'react';

interface Props {
  images: string[]
}

const ImageCarosel: React.FC<Props> = (props) => {

  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

  const containerStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center'
  }
  const arrowStyles: React.CSSProperties = {
    fontSize: 48
  }

  return (
    <div style={containerStyles}>
      <i
        className="material-icons"
        style={arrowStyles}
        onClick={() => setCurrentIndex((currentIndex - 1) >= 0 ? currentIndex -1 : props.images.length-1 )}
      >keyboard_arrow_left</i>
      <FillerImage color={props.images[currentIndex]} />
      <i
        className="material-icons"
        style={arrowStyles}
        onClick={() => setCurrentIndex((currentIndex + 1) % props.images.length)}
      >keyboard_arrow_right</i>
    </div>
  )
}

export default ImageCarosel;


const FillerImage: React.FC<{color: string}> = (props) => (
  <div style={{backgroundColor: props.color, width: 200, height: 200}} />
)
