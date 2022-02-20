import React, { useState } from "react";
import styled from 'styled-components';
import {ArrowIosDownwardOutline, ArrowIosUpwardOutline} from '@styled-icons/evaicons-outline';

interface IProps {
  open?: boolean;
  title: string;
}

const Question = styled.div`
    font-size: 20px;
    color: white;
    background: #3E6232;
    border-radius: 8px;
    padding: 20px 65px 20px 20px;
    margin-top: 15px;
    position: relative;
`;

export const OpenArrow = styled(ArrowIosDownwardOutline)`
  color: white;
  width: 40px;
  position: absolute;
  right: 20px;
  top: 20%;
`;

export const CloseArrow = styled(ArrowIosUpwardOutline)`
  color: white;
  width: 40px;
  position: absolute;
  right: 20px;
  top: 20%;
`;

const Answer = styled.div`
    font-size: 18px;
    background: #DAF4D1;
    padding: 30px 20px 20px 20px;
    margin-top: -10px;
    border-radius: 0px 0px 8px 8px;
`;

const Collapsible: React.FC<IProps> = ({ open, children, title }) => {
  const [isOpen, setIsOpen] = useState(open);

  const openDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
      <div>
        <Question onClick={openDropdown}>{title}
            {isOpen ? <CloseArrow/> : <OpenArrow/> }
        </Question>
        {isOpen && <Answer>{children}</Answer>}
      </div>
  );
};

export default Collapsible;