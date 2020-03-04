import React from "react";
import styled from "styled-components";
import LinkComponent from "./LinkComponent";
import RouteComponent from "./RouteComponent";
import Logo from "../images/Icon_Yellow.png";
import { findByLabelText } from "@testing-library/react";
import { Link } from "react-router-dom";

const size = {
  mobile: "420px",
  tabletM: "800px",
  tabletL: "1100px"
};

const FooterWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  position: fixed;
  width: 100%;
  height: 30%;
  bottom: 0;
  margin-bottom: 0;
  background: #232636;
  @media (max-width: ${size.mobile}) {
    height: 20%;
  }
  @media (min-width: ${size.mobile}) and (max-width: ${size.tabletM}) {
  }
`;

const LogoWrapper = styled.div`
  border: 1px;
  align-self: center;
  margin-left: 20%;
  transform: scale(2, 2);
  @media (max-width: ${size.mobile}) {
    margin-left: 5%;
    margin-bottom: 15%;
    transform: scale(0.5, 0.5);
  }
  @media (min-width: ${size.mobile}) and (max-width: ${size.tabletM}) {
    transform: scale(1, 1);
    margin-left: 10%;
    margin-bottom: 15%;
  }
  @media (min-width: ${size.tabletM}) and (max-width: ${size.tabletL}) {
    transform: scale(1.5, 1.5);
    margin-left: 15%;
    margin-bottom: 12%;
  }
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5% 5% 20% 2%;
  font-size: 1.5rem;
  @media (max-width: ${size.mobile}) {
    margin: 5% 5% 20% 2%;
    transform: scale(0.2 0.2);
    font-size: 1rem;
  }
  @media (min-width: ${size.mobile}) and (max-width: ${size.tabletM}) {
    margin: 10% 6% 20% 2%;
    font-size: 1rem;
  }
  @media (min-width: ${size.tabletM}) and (max-width: ${size.tabletL}) {
    margin: 10% 6% 20% 2%;
    font-size: 1.5rem;
  }
`;

const RoutingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5% 2% 20% 40%;
  font-size: 1.5rem;
  @media (max-width: ${size.mobile}) {
    margin: 5% 5% 20% 15%;
    font-size: 0.9rem;
  }
  @media (min-width: ${size.mobile}) and (max-width: ${size.tabletM}) {
    margin: 10% 10% 20% 30%;
    font-size: 1rem;
  }
  @media (min-width: ${size.tabletM}) and (max-width: ${size.tabletL}) {
    margin: 10% 10% 20% 30%;
    font-size: 1.5rem;
  }
`;

class FooterComponent extends React.Component {
  render() {
    return (
      <FooterWrapper>
        <LogoWrapper>
          <img src={Logo}></img>
        </LogoWrapper>

        <RoutingWrapper>
          <RouteComponent link="/team" title="Our Team"></RouteComponent>
          <RouteComponent link="" title="Hyperloop"></RouteComponent>
          <RouteComponent link="" title="Sponsors"></RouteComponent>
          <RouteComponent link="" title="Contact Us"></RouteComponent>
        </RoutingWrapper>

        <SocialMediaWrapper>
          <LinkComponent
            link="https://twitter.com/team_waterloop"
            title="Twitter"
          ></LinkComponent>
          <LinkComponent
            link="https://www.instagram.com/team_waterloop/"
            title="Instagram"
          ></LinkComponent>
          <LinkComponent
            link="https://www.facebook.com/teamwaterloop"
            title="Facebook"
          ></LinkComponent>
          <LinkComponent
            link="https://medium.com/waterloop"
            title="Medium"
          ></LinkComponent>
        </SocialMediaWrapper>
      </FooterWrapper>
    );
  }
}

export default FooterComponent;
