import React from "react";
import styled from "styled-components";
import "../../theme/styles.scss";

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
  yellow: "#FED138",
  black: "#333333",
  white: "#FFFFFF",
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

  const ButtonDiv = styled.button`
    background-color: ${ColorMap[backgroundColor]};
    border-color:  ${ColorMap[backgroundColor]};
    transition: all 0.3s;
    &:hover {
      cursor: pointer;
      background-color: ${ColorMap[textColor]};
      border-color:  ${ColorMap[textColor]};
      transform: translateY(-5px);
    }
    &:active {
      border-color: ${ColorMap.yellow};
    }

  }`;

  const Text = styled.p`
    color: ${ColorMap[textColor]};
    ${ButtonDiv}:hover & {
      color: ${ColorMap[backgroundColor]};
    }
    ${ButtonDiv}:active & {
      border-color: ${ColorMap.yellow};
    }
  `;

  return (
    <ButtonDiv className={`ButtonDiv ${props.className}`} onClick={props.onClick}>
      <Text className="ButtonText">{props.text}</Text>
    </ButtonDiv>
  );
};

export default Button;
