import React from 'react';
import styled from 'styled-components';
import IconCheck from './IconCheck';
import IconUnchecked from './IconUnchecked';

const StyledButton = styled.button`
  background: transparent;
  border: none;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  outline: none;
  color: black;
  margin-right: 0.5rem;
  cursor: pointer;
  text-align: left;
`;

const CheckContainer = styled.div`
  margin-right: 1rem;
`;

const ChildContainer = styled.div`
  padding-top: 0.2rem;
  font-size: 1rem;
  font-weight: 400;
  font-family: IBM Plex Sans;
`;

interface Props {
  checked?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Checkbox: React.FC<Props> = (props) => {
  const Icon = props.checked ? IconCheck : IconUnchecked;

  return (
    <StyledButton
      onClick={props.onClick}>
      <CheckContainer>
        <Icon />
      </CheckContainer>

      <ChildContainer>
        { props.children }
      </ChildContainer>
    </StyledButton>
  );
};

export default Checkbox;
