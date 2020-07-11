import React from "react";
import styled from "styled-components";
import IconYellowImg from "../../static/img/logos/Logo.svg";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import Flock from "../../pages/Flock";
import Team from "../../pages/Team";
import Sponsors from "../../pages/Sponsors";
import { NavLink } from "react-router-dom";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  width: 100%;
  height: 55px;
  background-color: #232635;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  flex-wrap: nowrap;
  align-items: center;
  padding: 0 50px;
`;

const StyledLink = styled(NavLink)`
  color: white;
  margin: 0 10pt;
  font-family: "IBM Plex Sans";
  font-size: 18px;
  text-transform: uppercase;

  text-decoration: none;
  &:visited,
  &:link {
    text-decoration: none;
  }

  &:focus,
  &:hover,
  &:active {
    text-decoration: none;
    color: #fed138;
  }
`;

const LogoContainer = styled.div`
  align-items: left;
  padding: 3px 50px;
`;

const IconYellow = styled.img`
  width: 50px;
  height: 50px;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
`;

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

class NavbarDesktop extends React.Component {
  render() {
    return (
      <NavbarContainer>
        <LogoContainer>
          <NavLink to="/">
            <IconYellow src={IconYellowImg}></IconYellow>
          </NavLink>
        </LogoContainer>
        <ListContainer>
          <Link to="/" title="Home" text="Home">
            <Home />
          </Link>
          <Link to="/the-flock" title="The Flock" text="The Flock">
            <Flock />
          </Link>
          <Link to="/team" title="Team" text="Team">
            <Team />
          </Link>
          <Link to="/sponsors" title="Sponsors" text="Sponsors">
            <Sponsors />
          </Link>
          <Link to="/contact" title="Contact" text="Contact">
            <Contact />
          </Link>
        </ListContainer>
      </NavbarContainer>
    );
  }
}

export default NavbarDesktop;
