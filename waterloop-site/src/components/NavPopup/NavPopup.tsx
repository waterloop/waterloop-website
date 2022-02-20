import React, {useState} from "react";
import styled from 'styled-components';
import {Close} from '@styled-icons/evil';

const Card = styled.div`
    position: absolute;
    right: 20px;
    padding: 20px;
    background: #F4F4F4;
    width: 330px;
    height: 170px;    
    border-radius: 6px;
    z-index: 100000;
    align-items: center;
`;

const Title = styled.div`
    font-size: 24px;
    margin-bottom: 15px;
`;

export const CloseIcon = styled(Close)`
  color: black;
  width: 30px;
  position: absolute;
  right: 20px;
  top: 20px;
  &:hover {
    color: grey;
    cursor: pointer;
  }
`;

const Button = styled.button`
    margin-top: 20px;
    text-align: center;
    height: 37px;
    font-weight: bold;
    font-size: 16px;
    color: white;
    display: block;
    background: #84B274;
    border: none;
    border-radius: 100px;
    padding: 8px 16px;
    margin-left: 30%;
`;


const NavPopup: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);

    function closePopup() {
        setIsOpen(false);
    }

    if (!isOpen) { return null; }
    return (
        <Card>
            <Title>Sustainable Tech Event</Title>
            <CloseIcon onClick={closePopup}/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            <Button onClick={(): void => console.log('submitting form')}>Check it out!</Button>
        </Card>
    );
};

export default NavPopup;
