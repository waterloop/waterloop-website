import React from "react";
import styled from "styled-components";
import "../../theme/Global.css";
// import Home from "../home/home.tsx";
// import GooseV from "../gooseV/gooseV.tsx";
// import Teams from "../teams/teams.tsx";
// import Sponsors from "../sponsors/sponsors.tsx";
// import Media from "../media/media.tsx";
// import Contact from "../contact/contact.tsx";
import IconYellowImg from "../../static/img/logos/Icon_Yellow.png";

import { NavLink } from "react-router-dom";

type Page = { title: string };

const StyledLink = styled(NavLink)`
  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
`;

type LinkProp = { to: string; title: string; text: string };

class Link extends React.Component<LinkProp> {
  render() {
    return (
      <StyledLink className="StyledLink"
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
          <img className="IconYellow" src={IconYellowImg}></img>
        </div>
        <div className="ListContainer">
          <Link to="/" title="home" text="HOME" />

          <Link to="/gooseV" title="gooseV" text="GOOSE V" />

          <Link to="/teams" title="teams" text="TEAMS" />

          <Link to="/sponsors" title="sponsors" text="SPONSORS" />

          <Link to="/media" title="media" text="MEDIA" />

          <div className="RoundedBorder">
            <Link to="/contact" title="contact" text="CONTACT" />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
