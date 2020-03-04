import React from "react";
import styled from "styled-components";
import TestComponent from "../../pages/TestPage";
// import Home from "../home/home.tsx";
// import GooseV from "../gooseV/gooseV.tsx";
// import Teams from "../teams/teams.tsx";
// import Sponsors from "../sponsors/sponsors.tsx";
// import Media from "../media/media.tsx";
// import Contact from "../contact/contact.tsx";
import IconYellowImg from "../../Icon_Yellow.png";

import { NavLink } from "react-router-dom";

type Page = { title: string };

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5vh;
  background-color: #232635;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  flex-wrap: nowrap;
`;

const LinkContainer = styled.div`
  color: white;
  margin: 0 5pt 0 5pt;
`;

const LogoContainer = styled.div`
  align-items: left;
`;

const IconYellow = styled.img`
  width: 50px;
  height: 50px;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
`;



class Navbar extends React.Component {
  render() {
    return (
      <NavbarContainer>
        <LogoContainer>
          <IconYellow src={IconYellowImg}></IconYellow>
        </LogoContainer>
        <ListContainer>
          <LinkContainer>
            <NavLink to={"/"} title="home" exact activeClassName="active">
              HOME
            </NavLink>
          </LinkContainer>

          <LinkContainer>
            <NavLink
              to={"/gooseV"}
              title="gooseV"
              exact
              activeClassName="active"
            >
              GOOSE V
            </NavLink>
          </LinkContainer>

          <LinkContainer>
            <NavLink to={"/teams"} title="teams" exact activeClassName="active">
              TEAMS
            </NavLink>
          </LinkContainer>

          <LinkContainer>
            <NavLink
              to={"/sponsors"}
              title="sponsors"
              exact
              activeClassName="active"
            >
              SPONSORS
            </NavLink>
          </LinkContainer>

          <LinkContainer>
            <NavLink to={"/media"} title="media" exact activeClassName="active">
              MEDIA
            </NavLink>
          </LinkContainer>

          <LinkContainer>
            <NavLink
              to={"/contact"}
              title="contact"
              exact
              activeClassName="active"
            >
              CONTACT
            </NavLink>
          </LinkContainer>
        </ListContainer>
      </NavbarContainer>
    );
  }
}

export default Navbar;
