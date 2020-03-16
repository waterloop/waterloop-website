import React from "react"
import styled from "styled-components"

import BrentsWeldingAndFab from "./sponsorphotos/BrentsWeldingAndFab.png"
import UW_Engineering from "./sponsorphotos/UW_Engineering.png"
import UW_Engineering_Endowment from "./sponsorphotos/UW_Engineering_Endowment.png"
import UW_Engineering_Society from "./sponsorphotos/UW_Engineering_Society.png"
import ClickUp from "./sponsorphotos/ClickUp.png"
import WCBranham from "./sponsorphotos/WCBranham.png"
import Psim from "./sponsorphotos/Psim.png"
import Ansys from "./sponsorphotos/Ansys.png"
import AndersonPowerProducts from "./sponsorphotos/AndersonPowerProducts.png"
import Mitutoyo from "./sponsorphotos/Mitutoyo.png"
import Threedx from "./sponsorphotos/Threedx.png"
import StarTechnology from "./sponsorphotos/StarTechnology.png"
import WPrint from "./sponsorphotos/WPrint.png"
import Wera from "./sponsorphotos/Wera.png"
import L3Harris from "./sponsorphotos/L3Harris.png"

const Img = styled.img`
  display: flex;
  align-content: center;
  width: 19vw;
  height: 15vh;
  margin: 40px;
  padding: 5px;
  border: 2px solid #AAB7C4;
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
          <Img src={UW_Engineering_Endowment} alt="UW_Engineering_Endowment"></Img>
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
