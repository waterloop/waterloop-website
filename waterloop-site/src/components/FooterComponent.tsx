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
  position: relative;

  width: 100%;
  height: 175px;
  bottom: 0;
  margin-bottom: 0;
  background: #232636;

  @media (max-width: ${size.mobile}) {
    height: 130px;
  }
  @media (min-width: ${size.mobile}) and (max-width: ${size.tabletM}) {
  }
`;

const LogoWrapper = styled.div`
  align-self: center;
  margin-left: 10%;
  transform: scale(1.25, 1.25);

  @media (max-width: ${size.mobile}) {
    margin: 30px 0 30px 20px;
    transform: scale(0.75, 0.75);
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
  margin: 10% 0% 10% 10%;
  padding-bottom: 2px;
  font-size: 18px;
  @media (max-width: ${size.mobile}) {
    margin: 5px 10px 5px 2px;
    font-size: 13px;
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
  margin: 10% 10% 0% 0%;
  padding-bottom: 2px;
  font-size: 18px;
  @media (max-width: ${size.mobile}) {
    margin: 5px 20px 5px 2px;
    font-size: 13px;
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

const LinksWrapper = styled.div`
  display: flex;
  width: 300px;
  height: 175px;
  margin-right: 150px;
  padding-top: 10px;
  @media (max-width: ${size.mobile}) {
    margin: 5% 5% 20% 15%;
  }
  @media (min-width: ${size.mobile}) and (max-width: ${size.tabletM}) {
    margin: 10% 10% 20% 30%;
  }
  @media (min-width: ${size.tabletM}) and (max-width: ${size.tabletL}) {
    margin: 10% 10% 20% 30%;
  }
`;

class FooterComponent extends React.Component {
  render() {
    return (
      <FooterWrapper>
        <LogoWrapper>
          <img src={Logo}></img>
        </LogoWrapper>

        <LinksWrapper>
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
        </LinksWrapper>
      </FooterWrapper>
    );
  }
}

export default FooterComponent;
