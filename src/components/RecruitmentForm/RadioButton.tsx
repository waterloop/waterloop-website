import React from 'react';
import styled from 'styled-components';

interface RadioButtonProps {
  checked: boolean;
  onChange: () => void;
  name: string;
}

const RadioContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-right: 8px;
`;

const RadioLabel = styled.label`
`;

const RadioButton: React.FC<RadioButtonProps> = ({ checked, onChange, name }) => (
  <RadioContainer>
    <RadioLabel htmlFor={`radiobutton-${name}`} onClick={onChange}>
      {name}
    </RadioLabel>
    <input
      id={`radiobutton-${name}`}
      type="radio"
      checked={checked}
      name="applicationTerm"
      required
      onChange={onChange}
    />
  </RadioContainer>
);

export default RadioButton;
