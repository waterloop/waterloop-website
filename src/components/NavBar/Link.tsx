import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: white;
  margin: 0 10pt;
  font-family: 'IBM Plex Sans';
  font-size: 18px;
  text-transform: uppercase;

  text-decoration: none;
  &:visited,
  &:link {
    text-decoration: none;
  }
  &.${(props) => props.activeClassName} {
    text-decoration: none;
    color: #fed138;
  }
  &:focus,
  &:hover,
  &:active {
    text-decoration: none;
    color: #fed138;
  }
`;

interface LinkProps {
  to: string;
  title: string;
  text: string;
}

const Link: React.FC<LinkProps> = (props) => (
  <StyledLink
    activeClassName="any"
    isActive={(match) => {
      return !(!match || (match && !match.isExact));
    }}
    to={props.to}
    title={props.title}
  >
    {props.text}
  </StyledLink>
);

export default Link;
