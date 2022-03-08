import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

interface Props {
  open: boolean;
  title?: string;
  url?: string;
}

const rotateIcon = keyframes`
  50% {transform: rotate(180deg);}
`;

const Question = styled.div`
  padding: 20px 65px 20px 20px;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 20px;
  font-size: 20px;
  color: white;
  background: #203d7a;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
`;

export const ExpandArrow = styled(ExpandLessIcon)`
  color: white;
  position: absolute;
  right: 20px;
  top: 20%;
  animation-fill-mode: forwards;
  animation: ${rotateIcon} linear;
`;

const Answer = styled.div<Props>`
  margin-left: 10%;
  margin-right: 10%;
  font-size: 18px;
  background: white;
  border-radius: 0px 0px 8px 8px;
  margin-top: -10px;
  overflow: hidden;
  max-height: ${(props) => (props.open ? '1000px' : '0')};
  transition: max-height 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
`;

const AnswerText = styled.p`
  padding: 20px 20px 10px 20px;
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
            transition: 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1.0)',
            transform: `rotate(${isOpen ? 0 : 180}deg)`,
          }}
        />
      </Question>
      <Answer open={isOpen}>
        <AnswerText>{children}</AnswerText>
      </Answer>
    </div>
  );
};

export default AccordionDropdown;