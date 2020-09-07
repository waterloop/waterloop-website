import React from "react";
import BuildingsImg from "static/img/background/buildings.svg";
import WaterloopImg from "static/img/background/waterloop.svg";
import "../../theme/styles.scss";
import { Link } from "react-scroll";

type MyProps = { description: string; anchor: string };

class Landing extends React.Component<MyProps> {
  render(): React.ReactElement {
    return (
      <div className="landingContainer">
        <div className="landingContent">
          <div className="landingWaterloopContainer">
            <img
              className="landingWaterloop"
              src={WaterloopImg}
              alt="waterloop logo"
            />
          </div>
          <div className="landingDescriptionContainer">
            <h3 className="white-text center-text">{this.props.description}</h3>
          </div>
          {/* COMMENT BELOW ONCE POSTINGS ARE UP */}
          <button
            onClick={(): Window | null => window.open("/recruitment", "_self")}
            className={"ButtonDiv landing-btn"}
          >
            <div className={"ButtonText"}>JOIN US</div>
          </button>
          <Link
            to={this.props.anchor}
            smooth={true}
            offset={-80}
            duration={750}
          >
            {/* UNCOMMENT BELOW ONCE POSTINGS ARE DONE */}

            {/* <button className={"ButtonDiv landing-btn"}>
              <div className={"ButtonText"}>EXPLORE</div>
            </button> */}
          </Link>
        </div>

        <div className="landingBuildingContainer">
          <img
            className="landingBuildings"
            src={BuildingsImg}
            alt="buildings"
          ></img>
        </div>
      </div>
    );
  }
}

export default Landing;
