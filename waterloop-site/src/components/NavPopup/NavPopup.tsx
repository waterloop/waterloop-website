import React, {useState} from "react";
import styled from 'styled-components';
import {Close} from '@styled-icons/evil';

const Card = styled.div`
    position: absolute;
    right: 20px;
    padding: 20px;
    background: #F4F4F4;
    width: 330px;
    height: 165px;    
    border-radius: 6px;
    z-index: 100000;
    align-items: center;
    font-size: 15px;
    opacity: 0;
    animation: fadeIn 5s;
    -webkit-animation: fadeIn 2s;
    -moz-animation: fadeIn 2s;
    -o-animation: fadeIn 2s;
    -ms-animation: fadeIn 2s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;

    @keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
      }
      
      @-moz-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
      }
      
      @-webkit-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
      }
      
      @-o-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
      }
      
      @-ms-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
      }
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
    &:hover {
        background: #3E6232;
        transition: background-color 0.2s ease-in;
    }
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
            <Button onClick={(): Window | null => window.open("/sustainable-tech", "_self")}>Check it out!</Button>
        </Card>
    );
};

export default NavPopup;
