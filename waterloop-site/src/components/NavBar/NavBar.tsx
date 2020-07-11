import React from "react";
import styled from "styled-components";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import Flock from "../../pages/Flock";
import Team from "../../pages/Team";
import Sponsors from "../../pages/Sponsors";
import "../../theme/global.css";
import IconYellowImg from "../../static/img/logos/Logo.svg";

import { NavLink } from "react-router-dom";

type Page = { title: string };

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
      <StyledLink
        className="StyledLink"
        to={this.props.to}
        title={this.props.title}
        exact
        activeClassName="active"
      >
        {this.props.text}
      </StyledLink>
    );
  }
}

class Navbar extends React.Component {
  render() {
    return (
      <div className="NavbarContainer">
        <div className="LogoContainer">
          <NavLink to="/">
            <IconYellow src={IconYellowImg}></IconYellow>
          </NavLink>
        </div>
        <div className="ListContainer">
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
        </div>
      </div>
    );
  }
}

export default Navbar;
