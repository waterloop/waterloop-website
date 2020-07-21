import React from "react";
import BrentsWeldingAndFab from "../../static/img/sponsors/BrentsWeldingAndFab.png";
import UW_Engineering from "../../static/img/sponsors/UW_Engineering.png";
import UW_Engineering_Endowment from "../../static/img/sponsors/UW_Engineering_Endowment.png";
import UW_Engineering_Society from "../../static/img/sponsors/UW_Engineering_Society.png";
import ClickUp from "../../static/img/sponsors/ClickUp.png";
import WCBranham from "../../static/img/sponsors/WCBranham.png";
import { Button } from "components/Button";

type MyProps = {};

class SponsorsLanding extends React.Component<MyProps> {
  render() {
    return (
      <div className="Block-Sponsors">
        <div className="Header-Sponsors">
          <h2>Our Sponsors</h2>
        </div>
        <div className="SponsorsContainer">
          <img
            className="Img-Sponsors"
            src={BrentsWeldingAndFab}
            alt="BrentsWeldingAndFab"
          />
          <img
            className="Img-Sponsors"
            src={UW_Engineering}
            alt="UW_Engineering"
          />
          <img
            className="Img-Sponsors"
            src={UW_Engineering_Endowment}
            alt="UW_Engineering_Endowment"
          />
          <img
            className="Img-Sponsors"
            src={UW_Engineering_Society}
            alt="UW_Engineering_Society"
          />
          <img className="Img-Sponsors" src={WCBranham} alt="WCBranham"/>
          <img className="Img-Sponsors" src={ClickUp} alt="ClickUp"/>
        </div>
        <div style={{ alignSelf: "center" }}>
          <Button
            backgroundColor="yellow"
            textColor="black"
            text="SEE MORE OF OUR SPONSORS"
            onClick={() => window.open("sponsors")}
            variant={null}
          ></Button>
        </div>
      </div>
    );
  }
}

export default SponsorsLanding;
