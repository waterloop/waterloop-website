import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import IconYellowImg from '../../static/img/logos/Logo.svg';
import Contact from '../../pages/Contact';
import Home from '../../pages/Home';
import Flock from '../../pages/Flock';
import Team from '../../pages/Team';
import Sponsors from '../../pages/Sponsors';
import Blog from '../../pages/Blog/Blog';

import Link from './Link';

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  background-color: #232635;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  flex-wrap: nowrap;
  align-items: center;
  padding: 0 50px;

  @media screen and (max-width: 850px) {
    padding: 0 0;
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

const NavBar: React.FC = () => (
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
      <Link to="/recruitment" title="Join Us" text="Join Us" />
      <Link to="/blog" title="Blog" text="Blog">
        <Blog />
      </Link>
      <Link to="/contact" title="Contact" text="Contact">
        <Contact />
      </Link>
    </ListContainer>
  </NavbarContainer>
);

export default NavBar;
