import React from "react";
import { Button } from "components/Button";
import BuildingsImg from "static/img/background/buildings.svg";
import DownArrowImg from "static/img/background/downArrow.svg";
import WaterloopImg from "static/img/background/waterloop.svg";
import "../../theme/global.scss";

type MyProps = { description: string };

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
            ></img>
          </div>
          <div className="landingDescriptionContainer">
            <h3>{this.props.description}</h3>
          </div>
          <Button
            backgroundColor="yellow"
            textColor="black"
            text="JOIN US"
            onClick={() => window.open("contact")}
            variant={null}
          ></Button>
        </div>

        <div className="landingArrowContainer">
          <img
            className="landingDownArrow"
            src={DownArrowImg}
            alt="navigation"
          ></img>
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

export default heroComponent;
