import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

interface Props {
  open?: boolean;
  title: string;
}

const rotateIcon = keyframes`
  50% {transform: rotate(-180deg);}
`;

const Question = styled.div`
  font-size: 20px;
  color: white;
  background: #3e6232;
  border-radius: 8px;
  padding: 20px 65px 20px 20px;
  margin-top: 15px;
  position: relative;
`;

export const ExpandArrow = styled(ExpandMoreIcon)`
  color: white;
  position: absolute;
  right: 20px;
  top: 20%;
  animation-fill-mode: forwards;
  animation: ${rotateIcon} linear;
`;

const Answer = styled.div`
  font-size: 18px;
  background: #daf4d1;
  padding: 30px 20px 20px 20px;
  margin-top: -10px;
  border-radius: 0px 0px 8px 8px;
`;

const AccordionDropdown: React.FC<Props> = ({ open, children, title }) => {
  const [isOpen, setIsOpen] = useState(open);

  const openDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <Question onClick={openDropdown}>
        {title}
        <ExpandArrow
          fontSize="large"
          style={{
            transition: 'transform .5s',
            transform: `rotate(${isOpen ? 0 : -180}deg)`,
          }}
        />
      </Question>
      {isOpen && <Answer>{children}</Answer>}
    </div>
  );
};

export default AccordionDropdown;
