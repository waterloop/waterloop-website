import React, { useState } from 'react';
import styled from 'styled-components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

interface IProps {
  open?: boolean;
  title: string;
}

const Question = styled.div`
  font-size: 20px;
  color: white;
  background: #3e6232;
  border-radius: 8px;
  padding: 20px 65px 20px 20px;
  margin-top: 15px;
  position: relative;
`;

export const OpenArrow = styled(ExpandMoreIcon)`
  color: white;
  position: absolute;
  right: 20px;
  top: 20%;
`;

export const CloseArrow = styled(ExpandLessIcon)`
  color: white;
  position: absolute;
  right: 20px;
  top: 20%;
`;

const Answer = styled.div`
  font-size: 18px;
  background: #daf4d1;
  padding: 30px 20px 20px 20px;
  margin-top: -10px;
  border-radius: 0px 0px 8px 8px;
`;

const AccordionDropdown: React.FC<IProps> = ({ open, children, title }) => {
  const [isOpen, setIsOpen] = useState(open);

  const openDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <Question onClick={openDropdown}>
        {title}
        {isOpen ? (
          <CloseArrow fontSize="large" />
        ) : (
          <OpenArrow fontSize="large" />
        )}
      </Question>
      {isOpen && <Answer>{children}</Answer>}
    </div>
  );
};

export default AccordionDropdown;
