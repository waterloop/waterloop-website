import React from 'react';

type BackgroundColor = "yellow" | "black";
type TextColor = "yellow" | "white";

interface Props {
  backgroundColor: BackgroundColor,
  text: string,
  textColor: TextColor,
  onClick: () => void
}

const ColorMap = {
  yellow: '#FED138',
  black: '#333333',
  white: '#FFFFFF'
}

const Button: React.FC<Props> = (props) => {

  const buttonStyles: React.CSSProperties = {
    backgroundColor: ColorMap[props.backgroundColor],
    borderRadius: '15px',
    width: '155px',
    height: '34px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
  const textStyles: React.CSSProperties = {
    color: ColorMap[props.textColor],
    fontSize: 'large',
    fontFamily: 'IBM Plex Sans',
    fontWeight: "bold"
  }
  return (
    <div style={buttonStyles} onClick={props.onClick}>
      <p style={textStyles}>{props.text}</p>
    </div>
  )
}

export default Button
