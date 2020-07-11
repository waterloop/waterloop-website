import React from "react";
import styled from "styled-components";
import "../../theme/global.scss";

type BackgroundColor = "yellow" | "black";
type TextColor = "yellow" | "white" | "black";

interface NonVariantProps {
  backgroundColor: BackgroundColor;
  text: string;
  textColor: TextColor;
  onClick: () => void;
  variant: null;
}

interface VariantProps {
  onClick: () => void;
  variant: VariantNumber;
  text: string;
  backgroundColor: null;
  textColor: null;
}

type Props = VariantProps | NonVariantProps;

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
    textColor: props.variant
      ? VariantMap[props.variant].textColor
      : props.textColor,
    backgroundColor: props.variant
      ? VariantMap[props.variant].backgroundColor
      : props.backgroundColor,
  };

  const ButtonDiv = styled.button`
    background-color: ${ColorMap[backgroundColor]};
    border-color:  ${ColorMap[backgroundColor]};
    &:hover {
      background-color: ${ColorMap[textColor]};
      border-color:  ${ColorMap[textColor]};
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
    <ButtonDiv className="ButtonDiv" onClick={props.onClick}>
      <Text className="ButtonText">{props.text}</Text>
    </ButtonDiv>
  );
};

export default Button;
