import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import BlackLogoImg from '../../../static/img/sustainable-tech/Icon_Black.svg';
import scrollTo from '../utils/LinkScroll';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 0%;
  width: 100%;
  height: 70px;
  background-color: #e5f6fa;
  position: fixed;
  top: 0;
  z-index: 999;
`;

const ListContainer = styled.div`
  padding: 2%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  background-color: #e5f6fa;
  height: 100vh;
  width: 100vw;
  right: 0;
  top: 0;
  line-height: 500%;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
  &.closed {
    width: 0;
    padding: 0;
    overflow: hidden;
  }
`;

const ScrollLink = styled.button`
  color: #010101;
  font-family: 'IBM Plex Sans';
  padding-top: 40px;
  font-size: 28px;
  font-weight: 400;
  background-color: #e5f6fa;
  border: none;

  text-decoration: none;
  &:visited,
  &:link {
    text-decoration: none;
  }
`;

const IconBlack = styled.img`
  margin-left: 25px;
  width: 50px;
  height: 30px;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
`;

// mobile toggle button
const StyledToggle = styled.button`
  display: flex;
  z-index: 3000;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 52px;
  height: 40px;
  margin-top: 15px;
  padding-right: 20px;
  margin-bottom: 15px;
  background: transparent;
  border: none;
  outline: none;
  &.open {
    justify-content: center;
  }
`;

// lines of the mobile toggle button
const ToggleLine = styled.div`
  width: 30px;
  height: 3px;
  margin-top: 3px;
  margin-bottom: 3px;
  margin-right: 10px;
  background-color: black;
  border-radius: 10px;
  -webkit-transition: transform 0.4s ease-in-out,
    background-color 0.2s ease-in-out, height 0.2s ease-in-out;
  transition: transform 0.4s ease-in-out, background-color 0.2s ease-in-out,
    height 0.2s ease-in-out;
  &.open1 {
    height: 3px !important;
    background-color: #010101;
    transform: translate(0%, 9px) rotate(45deg);
  }
  &.open2 {
    height: 3px !important;
    transform: translate(300%, 0px);
    background-color: #010101;
  }
  &.open3 {
    height: 3px !important;
    background-color: #010101;
    transform: translate(0%, -9px) rotate(-45deg);
  }
`;

const Sidebar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const navLinks = [
    { id: 'home-scroll', name: 'HOME' },
    { id: 'about-scroll', name: 'ABOUT' },
    { id: 'schedule-scroll', name: 'SCHEDULE' },
    { id: 'teams-scroll', name: 'TEAMS' },
    { id: 'faq-scroll', name: 'FAQ' },
  ];

  return (
    <SidebarContainer
      onTouchMove={(): void => {
        setSidebarOpen(!sidebarOpen);
      }}
    >
      <Link to="/">
        <IconBlack src={BlackLogoImg} />
      </Link>
      <StyledToggle
        className={sidebarOpen ? 'open' : ''}
        onClick={(): void => {
          setSidebarOpen(!sidebarOpen);
        }}
      >
        <ToggleLine className={sidebarOpen ? 'open1' : ''} />
        <ToggleLine className={sidebarOpen ? 'open2' : ''} />
        <ToggleLine className={sidebarOpen ? 'open3' : ''} />
      </StyledToggle>
      <ListContainer className={sidebarOpen ? '' : 'closed'}>
        {navLinks.map((link, idx) => (
          <div key={`ste-sidebar-link-${idx}`}>
            <ScrollLink
              onClick={(): void => {
                setSidebarOpen(false);
                setTimeout(() => {
                  scrollTo(link.id);
                }, 400);
              }}
            >
              {link.name}
            </ScrollLink>
          </div>
        ))}
      </ListContainer>
    </SidebarContainer>
  );
};
export default Sidebar;
