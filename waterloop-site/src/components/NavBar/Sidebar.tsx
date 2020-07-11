import React from "react";
import styled from "styled-components";
import BlackLogoImg from "../../static/img/logos/logo.svg";
import HamburgerIcon from "../../static/img/assets/bars-solid.svg";
import IconYellowImg from "../../static/img/logos/Logo.svg";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import Flock from "../../pages/Flock";
import Team from "../../pages/Team";
import Sponsors from "../../pages/Sponsors";
import { NavLink } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 0%;
  width: 100%;
  height: 5%;
  background-color: #232635;
`;

const HamburgerContainer = styled.div`
align-items: right;
padding: 3px 50px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: #FFFFFF;
`;

const StyledLink = styled(NavLink)`
  color: #010101;
  margin: 0 10pt;
  font-family: "IBM Plex Sans";
  font-size: 18px;
  text-transform: uppercase;

  text-decoration: none;
  &:visited,
  &:link {
    text-decoration: none;
  }
`;

const LogoContainer = styled.div`
  padding: 3px 50px;
  background-color: #232635;
`;

const IconYellow = styled.img`
  width: 50px;
  height: 50px;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
`;

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '40px',
    height: '40px',
    right: '5%',
    top: '5%'
  },
  bmBurgerBars: {
    background: '#FFF',
    "border-radius": '15px'
  },
  bmMenu: {
    background: '#FFFFFF',
    fontSize: '2em'
  }, bmItem: {
    color: "#010101",
    margin: "0 10pt",
    "font-family": "IBM Plex Sans",
    "font-size": "18px",
    "text-transform": "uppercase"
  },
}

type LinkProp = { to: string; title: string; text: string };

class Link extends React.Component<LinkProp> {
  render() {
    return (
      <StyledLink to={this.props.to} title={this.props.title}>
        {this.props.text}
      </StyledLink>
    );
  }
}

enum Page {
  home = "Home",
  flock = "Flock",
  team = "Team",
  sponsors = "Sponsors",
  contact = "Contact"
}

interface Current {
  currpage: Page
}


class Sidebar extends React.Component<{}, Current> {

    constructor(props = {}) {
      super(props);
      this.state = {
        currpage: Page.home
      };
  }


  render() {
    return (
      <div>
          <Menu styles = { styles } right >
              <IconYellow src={BlackLogoImg}></IconYellow>
            <ListContainer>
              <div>
              <Link to="/" title="Home" text="Home">
                <Home />
              </Link>
              </div>
              <div>
              <Link to="/the-flock" title="The Flock" text="The Flock">
                <Flock />
              </Link>
              </div>
              <div>
              <Link to="/team" title="Team" text="Team">
                <Team />
              </Link>
              </div>
              <div>
              <Link to="/sponsors" title="Sponsors" text="Sponsors">
                <Sponsors />
              </Link>
              </div>
              <div>
              <Link to="/contact" title="Contact" text="Contact">
                <Contact />
              </Link>
              </div>
            </ListContainer>
          </Menu>
      </div>
    );
  }
}
export default Sidebar;
