import React from "react";
import LinkComponent from "../../components/Footer/LinkComponent";
import Logo from "../../static/img/logos/Logo.svg";
import "../../theme/styles.scss"; // For styling
class FooterComponent extends React.Component {
  render() {
    return (
      <div className="FooterWrapper">
        <div className="footer-row">
          <h2>Let's get in touch.</h2>
          <button className="button-yellow" onClick={() => window.open("/contact", "_self")}>
            Contact Us
          </button>
        </div>
        <div className="footer-row">
          <div className="LogoWrapper">
            <img src={Logo} alt="Waterloop Logo"></img>
          </div>

          <div className="LinksWrapper">
            <div className="RoutingWrapper">
              <h3>Explore</h3>
              <LinkComponent link="/team" title="Our Team" external={false} />
              <LinkComponent link="/" title="Hyperloop" external={false} />
              <LinkComponent
                link="/sponsors"
                title="Sponsors"
                external={false}
              />
              <LinkComponent
                link="/contact"
                title="Contact Us"
                external={false}
              />
            </div>

            <div className="SocialMediaWrapper">
              <h3>Social</h3>
              <LinkComponent
                link="https://twitter.com/team_waterloop"
                title="Twitter"
                external={true}
              />
              <LinkComponent
                link="https://www.instagram.com/team_waterloop/"
                title="Instagram"
                external={true}
              />
              <LinkComponent
                link="https://www.facebook.com/teamwaterloop"
                title="Facebook"
                external={true}
              />
              <LinkComponent
                link="https://medium.com/waterloop"
                title="Medium"
                external={true}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterComponent;
