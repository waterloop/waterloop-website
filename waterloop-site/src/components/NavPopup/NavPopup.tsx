import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';

const Card = styled.div`
  position: absolute;
  right: 20px;
  padding: 20px;
  background: #f4f4f4;
  width: 300px;
  height: auto;
  border-radius: 6px;
  z-index: 100000;
  align-items: center;
  font-size: 15px;
  opacity: 0;

  animation: fadeIn 2.5s;
  animation-delay: 0.3s;
  animation-fill-mode: forwards;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media only screen and (max-width: 400px) {
    width: 70vw;
  }
`;

const Title = styled.div`
  font-size: 24px;
  margin-bottom: 15px;
`;

export const ClosePopupIcon = styled(CloseIcon)`
  color: grey;
  width: 30px;
  position: absolute;
  right: 18px;
  top: 18px;
  &:hover {
    color: black;
    cursor: pointer;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  height: 37px;
  font-weight: bold;
  font-size: 16px;
  color: white;
  display: block;
  background: #84b274;
  border: none;
  border-radius: 100px;
  padding: 8px 16px;
  &:hover {
    cursor: pointer;
    background: #3e6232;
    transition: background-color 0.2s ease-in;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const NavPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  function closePopup() {
    setIsOpen(false);
  }

  if (!isOpen) {
    return null;
  }
  return (
    <Card>
      <Title>GreenTech</Title>
      <ClosePopupIcon fontSize="large" onClick={closePopup} />
      On March 25, Waterloop will be hosting an event in collaboration with
      other sustainable tech teams from Waterloo to showcase how UWaterloo is
      aims to grow the sustainable technology industry.
      <Button>
        <StyledLink to="/sustainable-tech">Check it out!</StyledLink>
      </Button>
    </Card>
  );
};

export default NavPopup;
