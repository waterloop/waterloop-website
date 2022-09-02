import React from "react";
import "../../theme/styles.scss";

/**NOTE: Currently background color YELLOW and text color BLACK are the only options supported.
 * Please manually add other color configurations in styles.scss when needed.
 * 
 * Please thank the styled-components library for this inconvenience. 
 * The library works poorly with onClick events on mobile.
 */


type BackgroundColor = "yellow" | "black";
type TextColor = "yellow" | "white" | "black";

interface NonVariantProps {
  backgroundColor: BackgroundColor;
  text: string;
  textColor: TextColor;
  onClick: () => void;
}

function isVariantProps(object: any): object is VariantProps {
  return (
    'onClick' in object
    && 'variant' in object
    && 'text' in object
    && 'backgroundColor?' in object
    && 'textColor?' in object
  )
};
interface VariantProps {
  onClick: () => void;
  variant: VariantNumber;
  text: string;
  backgroundColor?: null;
  textColor?: null;
}

type Props = (VariantProps | NonVariantProps) & { className?: string };

interface Variant {
  backgroundColor: BackgroundColor;
  textColor: TextColor;
}

type VariantNumber = 1;


const ColorMap = {
  yellow: "yellow",
  black: "black",
  white: "white",
};

const VariantMap: Record<VariantNumber, Variant> = {
  1: {
    backgroundColor: "yellow",
    textColor: "black",
  },
};

const Button: React.FC<Props> = (props) => {
  const {
    textColor,
    backgroundColor,
  }: {
    textColor: TextColor;
    backgroundColor: BackgroundColor;
  } = {
    textColor: isVariantProps(props)
      ? VariantMap[props.variant].textColor
      : props.textColor,
    backgroundColor: isVariantProps(props)
      ? VariantMap[props.variant].backgroundColor
      : props.backgroundColor,
  };

  return (
    <button className={`ButtonDiv ${ColorMap[backgroundColor ?? 'yellow']} ${props.className}`} onClick={props.onClick}>
      <p className={`ButtonText ${ColorMap[textColor ?? 'black']}`}>{props.text}</p>
    </button>
  );
};

export default Button;
