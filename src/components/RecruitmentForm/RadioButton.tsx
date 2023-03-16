import React from 'react';
import styled from 'styled-components';
interface RadioButtonProps {
  checked: boolean;
  onChange: () => void;
  name: string;
  question?: string;
  flexDir?: string;
}

const RadioContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-right: 8px;
`;

const RadioLabel = styled.label``;

const RadioButton: React.FC<RadioButtonProps> = ({
  checked,
  onChange,
  name,
  question,
  flexDir,
}) => (
  <RadioContainer>
    <RadioLabel htmlFor={`radiobutton-${name}`} onClick={onChange}>
      {name}
    </RadioLabel>
    <input
      id={`radiobutton-${name}`}
      type="radio"
      checked={checked}
      name={name}
      required
      onChange={onChange}
    />
  </RadioContainer>
);

export default RadioButton;
