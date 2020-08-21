import React from "react";
import LinkComponent from "../../components/Footer/LinkComponent";
import RouteComponent from "../../components/Footer/RouteComponent";
import Logo from "../../static/img/logos/Logo.svg";
import "../../theme/global.scss"; // For styling

class FooterComponent extends React.Component {
  render() {
    return (
      <div className="FooterWrapper">
        <div className="LogoWrapper">
          <img src={Logo} alt="Waterloop Logo"></img>
        </div>

        <div className="LinksWrapper">
          <div className="RoutingWrapper">
            <RouteComponent link="/team" title="Our Team"></RouteComponent>
            <RouteComponent link="/" title="Hyperloop"></RouteComponent>
            <RouteComponent link="/sponsors" title="Sponsors"></RouteComponent>
            <RouteComponent link="/contact" title="Contact Us"></RouteComponent>
          </div>

          <div className="SocialMediaWrapper">
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
          </div>
        </div>
      </div>
    );
  }
}

export default FooterComponent;
