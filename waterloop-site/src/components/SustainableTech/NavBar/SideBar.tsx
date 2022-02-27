import React from 'react';
import styled from 'styled-components';
import BlackLogoImg from '../../../static/img/logos/Icon_Black.svg';
import { ReactElement } from 'react';
import scrollTo from '../Utilities/LinkScroll';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 0%;
  width: 100%;
  height: 70px;
  background-color: #e5f6fa;
  position: absolute;
  top: 0;
`;

const ListContainer = styled.div`
  z-index: 2000;
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
  margin-left: 10px;
  width: 50px;
  height: 50px;
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
  margin-right: 0px;
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
    transform: translate(200%, 0px);
    background-color: #010101;
  }
  &.open3 {
    height: 3px !important;
    background-color: #010101;
    transform: translate(0%, -9px) rotate(-45deg);
  }
`;

type MyProps = {
  sidebarOpen: boolean;
  handleClickSidebar: (open: boolean) => void;
};

class Sidebar extends React.Component<MyProps> {
  render(): ReactElement {
    return (
      <SidebarContainer
        onTouchMove={(): void => {
          this.props.handleClickSidebar(!this.props.sidebarOpen);
        }}
      >
        <IconBlack src={BlackLogoImg}></IconBlack>
        <StyledToggle
          className={this.props.sidebarOpen ? 'open' : ''}
          onClick={(): void => {
            this.props.handleClickSidebar(!this.props.sidebarOpen);
          }}
        >
          <ToggleLine className={this.props.sidebarOpen ? 'open1' : ''} />
          <ToggleLine className={this.props.sidebarOpen ? 'open2' : ''} />
          <ToggleLine className={this.props.sidebarOpen ? 'open3' : ''} />
        </StyledToggle>
        <ListContainer className={this.props.sidebarOpen ? '' : 'closed'}>
          <div>
            <ScrollLink
              onClick={(): void => {
                this.props.handleClickSidebar(false);
                setTimeout(function () {
                  scrollTo('IDlocation1');
                }, 400);
              }}
            >
              Home
            </ScrollLink>
          </div>
          <div>
            <ScrollLink
              onClick={(): void => {
                this.props.handleClickSidebar(false);
                setTimeout(function () {
                  scrollTo('IDlocation2');
                }, 400);
              }}
            >
              About
            </ScrollLink>
          </div>
          <div>
            <ScrollLink
              onClick={(): void => {
                this.props.handleClickSidebar(false);
                setTimeout(function () {
                  scrollTo('IDlocation3');
                }, 400);
              }}
            >
              Team
            </ScrollLink>
          </div>
          <div>
            <ScrollLink
              onClick={(): void => {
                this.props.handleClickSidebar(false);
              }}
            >
              Schedule
            </ScrollLink>
          </div>
          <div>
            <ScrollLink
              onClick={(): void => {
                this.props.handleClickSidebar(false);
                setTimeout(function () {
                  scrollTo('IDlocation4');
                }, 400);
              }}
            >
              Sponsors
            </ScrollLink>
          </div>
          <div>
            <ScrollLink
              onClick={(): void => {
                this.props.handleClickSidebar(false);
                setTimeout(function () {
                  scrollTo('IDlocation5');
                }, 400);
              }}
            >
              FAQ
            </ScrollLink>
          </div>
        </ListContainer>
      </SidebarContainer>
    );
  }
}
export default Sidebar;
