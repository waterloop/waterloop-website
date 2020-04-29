import React from "react";
import styled from "styled-components";

import BrentsWeldingAndFab from "../../static/img/sponsors/BrentsWeldingAndFab.png";
import UW_Engineering from "../../static/img/sponsors/UW_Engineering.png";
import UW_Engineering_Endowment from "../../static/img/sponsors/UW_Engineering_Endowment.png";
import UW_Engineering_Society from "../../static/img/sponsors/UW_Engineering_Society.png";
import ClickUp from "../../static/img/sponsors/ClickUp.png";
import WCBranham from "../../static/img/sponsors/WCBranham.png";
import Psim from "../../static/img/sponsors/Psim.png";
import Ansys from "../../static/img/sponsors/Ansys.png";
import AndersonPowerProducts from "../../static/img/sponsors/AndersonPowerProducts.png";
import Mitutoyo from "../../static/img/sponsors/Mitutoyo.png";
import Threedx from "../../static/img/sponsors/Threedx.png";
import StarTechnology from "../../static/img/sponsors/StarTechnology.png";
import WPrint from "../../static/img/sponsors/WPrint.png";
import Wera from "../../static/img/sponsors/Wera.png";
import L3Harris from "../../static/img/sponsors/L3Harris.png";

const Img = styled.img`
  display: flex;
  align-content: center;
  width: 19vw;
  height: 15vh;
  margin: 40px;
  padding: 5px;
  border: 2px solid #aab7c4;
  border-radius: 10px;
`;

const Header = styled.h2`
  font-style: italic;
  font-size: 28px;
`;

const SponsorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  margin: 10px 150px;
`;

type MyProps = {};

class Sponsors extends React.Component<MyProps> {
  render() {
    return (
      <Block>
        <Header>Our Sponsors</Header>
        <SponsorsContainer>
          <Img src={BrentsWeldingAndFab} alt="BrentsWeldingAndFab"></Img>
          <Img src={UW_Engineering} alt="UW_Engineering"></Img>
          <Img
            src={UW_Engineering_Endowment}
            alt="UW_Engineering_Endowment"
          ></Img>
          <Img src={UW_Engineering_Society} alt="UW_Engineering_Society"></Img>
          <Img src={WCBranham} alt="WCBranham"></Img>
          <Img src={ClickUp} alt="ClickUp"></Img>
          <Img src={Psim} alt="Psim"></Img>
          <Img src={Ansys} alt="Ansys"></Img>
          <Img src={AndersonPowerProducts} alt="AndersonPowerProducts"></Img>
          <Img src={Mitutoyo} alt="Mitutoyo"></Img>
          <Img src={Threedx} alt="Threedx"></Img>
          <Img src={StarTechnology} alt="StarTechnology"></Img>
          <Img src={WPrint} alt="WPrint"></Img>
          <Img src={Wera} alt="Wera"></Img>
          <Img src={L3Harris} alt="L3Harris"></Img>
        </SponsorsContainer>
      </Block>
    );
  }
}

export default Sponsors;
