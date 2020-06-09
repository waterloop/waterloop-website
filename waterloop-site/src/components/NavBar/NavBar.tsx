import React from "react";
import styled from "styled-components";
import IconYellowImg from "../../static/img/logos/Icon_Yellow.png";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import Flock from "../../pages/Flock";
import Team from "../../pages/Team";
import Sponsors from "../../pages/Sponsors";
import {
  NavLink,
  BrowserRouter as Router
} from "react-router-dom";

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
`;


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
  padding: 0 50px;
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
  padding: 3px 50px;
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
  margin: 0 0 0 10px;
`;

type LinkProp = { to: string; title: string };

class Link extends React.Component<LinkProp> {
  render() {
    return (
      <StyledLink
        to={this.props.to}
        title={this.props.title}
      >
      </StyledLink>
    );
  }
}

class Navbar extends React.Component {
  render() {
    return (
      <Router>
        <NavbarContainer>
          <LogoContainer>
            <IconYellow src={IconYellowImg}></IconYellow>
          </LogoContainer>
          <ListContainer>
            <Link to="/" title="Home">
              <Home />
            </Link>
            <Link to="/the-flock" title="The Flock">
              <Flock />
            </Link>
            <Link to="/team" title="Team">
              <Team />
            </Link>
            <Link to="/sponsors" title="Sponsors">
              <Sponsors />
            </Link>
            <Link to="/contact" title="Contact">
              <Contact />
            </Link>
          </ListContainer>
        </NavbarContainer>
      </Router>
    );
  }
}

export default Navbar;
