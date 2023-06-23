import React from "react";
import LinkComponent from "../../components/Footer/LinkComponent";
import Logo from "../../static/img/logos/Logo.svg";
import "../../theme/styles.scss"; // For styling

const FooterComponent: React.FC = () => (
  <div className="FooterWrapper footer-text">
    <div className="footer-row">
      <h3>Let's get in touch.</h3>
      <button
        className="button-yellow"
        onClick={(): Window | null => window.open("/contact", "_self")}
      >
        Contact Us
      </button>
    </div>
    <div className="footer-row">
      <div className="LogoWrapper">
        <img src={Logo} alt="Waterloop Logo"/>
      </div>
      <div className="LinksWrapper">
        <div className="RoutingWrapper">
          <p>Explore</p>
          <LinkComponent link="/team" title="Our Team" external={false} />
          <LinkComponent link="/" title="Hyperloop" external={false} />
          <LinkComponent
            link="/sponsors"
            title="Sponsors"
            external={false}
          />
          <LinkComponent
            link="/blog"
            title="Blog"
            external={false}
          />
          <LinkComponent
            link="/contact"
            title="Contact Us"
            external={false}
          />
        </div>
        <div className="SocialMediaWrapper">
          <p>Social</p>
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
            link="https://www.linkedin.com/company/wloop"
            title="Linkedin"
            external={true}
          />
          <LinkComponent
            link="https://www.tiktok.com/@teamwaterloop"
            title="TikTok"
            external={true}
          />
        </div>
      </div>
    </div>
  </div>
);

export default FooterComponent;
