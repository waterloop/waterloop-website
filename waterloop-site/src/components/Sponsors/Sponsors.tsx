import React from "react";
import styled from "styled-components";
import BrentsWeldingAndFab from "../../static/img/sponsors/BrentsWeldingAndFab.png";
import UW_Engineering from "../../static/img/sponsors/UW_Engineering.png";
import UW_Engineering_Endowment from "../../static/img/sponsors/UW_Engineering_Endowment.png";
import UW_Engineering_Society from "../../static/img/sponsors/UW_Engineering_Society.png";
import ClickUp from "../../static/img/sponsors/ClickUp.png";
import WCBranham from "../../static/img/sponsors/WCBranham.png";
import { Button } from "components/Button";

const Img = styled.img`
  display: flex;
  align-self: center;
  justify-content: center;
  width: 319px;
  height: 184px;
  margin-left: 0;
  margin-right: 40px;
  margin-top: 10px;
  margin-bottom: 40px;
  padding: 5px;
  border: 2px solid #aab7c4;
  border-radius: 10px;
  background-color: #F4F4F4;
`;

const Header = styled.div`
  > h2 {
    font-style: italic;
    font-size: 36px;
    font-family: 'IBM Plex Sans';
  }
  align-self: center;
  padding-bottom: 2em;
`;

const SponsorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2em;
`;

type MyProps = {};

class Sponsors extends React.Component<MyProps> {
  render() {
    return (
      <Block>
        <Header><h2>Our Sponsors</h2></Header>
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
        </SponsorsContainer>
        <div style={{ alignSelf: "center" }}>
          <Button
            backgroundColor="yellow"
            textColor="black"
            text="SEE MORE OF OUR SPONSORS"
            onClick={() => window.open("sponsors")}
            variant={null}
          ></Button>
        </div>
      </Block>
    );
  }
}

export default Sponsors;
