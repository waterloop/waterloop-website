import React from "react";
import styled from "styled-components";
import TestComponent from "../pages/TestPage";
// import Home from "../home/home.tsx";
// import GooseV from "../gooseV/gooseV.tsx";
// import Teams from "../teams/teams.tsx";
// import Sponsors from "../sponsors/sponsors.tsx";
// import Media from "../media/media.tsx";
// import Contact from "../contact/contact.tsx";
import IconYellowImg from "../images/Icon_Yellow.png";

import { NavLink } from "react-router-dom";

type Page = { title: string };

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #232635;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  flex-wrap: nowrap;
  align-items: center;
  padding: 0 20px;
`;

const StyledLink = styled(NavLink)`
  color: white;
  margin: 0 10pt;

  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
`;

const LogoContainer = styled.div`
  align-items: left;
  padding: 0 20px;
`;

const IconYellow = styled.img`
  width: 50px;
  height: 50px;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
`;

const RoundedBorder = styled.div`
  border-radius: 25px;
  border-style: solid;
  border-color: white;
  border-width: 1px;
  padding: 3px 5px;
`;

type LinkProp = { to: string; title: string; text: string };

class Link extends React.Component<LinkProp> {
  render() {
    return (
      <StyledLink
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
      <NavbarContainer>
        <LogoContainer>
          <IconYellow src={IconYellowImg}></IconYellow>
        </LogoContainer>
        <ListContainer>
          <Link to="/" title="home" text="HOME" />

          <Link to="/gooseV" title="gooseV" text="GOOSE V" />

          <Link to="/teams" title="teams" text="TEAMS" />

          <Link to="/sponsors" title="sponsors" text="SPONSORS" />

          <Link to="/media" title="media" text="MEDIA" />

          <RoundedBorder>
            <Link to="/contact" title="contact" text="CONTACT" />
          </RoundedBorder>
        </ListContainer>
      </NavbarContainer>
    );
  }
}

export default Navbar;
