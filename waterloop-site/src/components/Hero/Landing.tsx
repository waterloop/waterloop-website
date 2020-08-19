import React from "react";
import { Button } from "components/Button";
import BuildingsImg from "static/img/background/buildings.svg";
import DownArrowImg from "static/img/background/downArrow.svg";
import WaterloopImg from "static/img/background/waterloop.svg";
import "../../theme/styles.scss";
import { Link } from "react-scroll";

type MyProps = { description: string; anchor: string };

class heroComponent extends React.Component<MyProps> {
  render() {
    return (
      <div className="landingContainer">
        <div className="landingContent">
          {/* waterloop svg */}
          <div className="landingWaterloopContainer">
            <img
              className="landingWaterloop"
              src={WaterloopImg}
              alt="waterloop logo"
            />
          </div>
          <div className="landingDescriptionContainer">
            <h3>{this.props.description}</h3>
          </div>
          <button
            onClick={() => window.open("recruitment")}
            className={"ButtonDiv landing-btn"}
          >
            <div className={"ButtonText"}>JOIN US</div>
          </button>
        </div>

        <div className="landingBuildingContainer">
          <img
            className="landingBuildings"
            src={BuildingsImg}
            alt="buildings"
          ></img>
        </div>

        <div className="landingArrowContainer">
          <Link
            to={this.props.anchor}
            smooth={true}
            offset={-80}
            duration={750}
          >
            <img
              className="landingDownArrow"
              src={DownArrowImg}
              alt="navigation"
            ></img>
          </Link>
        </div>
      </div>
    );
  }
}

export default heroComponent;
