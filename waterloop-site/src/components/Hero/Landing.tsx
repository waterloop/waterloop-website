import React from "react";
import styled from 'styled-components';
import { Button } from "components/Button";
import BuildingsImg from "static/img/background/buildings.svg";
import DownArrowImg from "static/img/background/downArrow.svg";
import WaterloopImg from "static/img/background/waterloop.svg";
import "../../theme/global.scss";
import { Link } from "react-scroll";

type MyProps = { description: string; anchor: string };

const LandingContainer = styled.div`
  background-image: url(${BuildingsImg});

  @media (max-width: 500px) {
    background-image: none;
  }
`;

class heroComponent extends React.Component<MyProps> {
  render() {
    return (
      // landingAligner nests background image in another div element to provide proper padding between the image and the bottom.
      <div className="landingAligner">
        <LandingContainer className="landingContainer">
          {/* Use flex: 1 on all 3 child divs to centre the title. */}
          <div className="landingFiller"></div>
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
            <Button
              backgroundColor="yellow"
              textColor="black"
              text="JOIN US"
              onClick={() => window.open("recruitment")}
              variant={null}
            ></Button>
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
        </LandingContainer>
      </div>
    );
  }
}

export default heroComponent;
