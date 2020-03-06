import React from "react";
import styled from "styled-components";
import "./styling/TestComponent.css";

type MyProps = {position: string};

const PositionP = styled.div`
font-family: IBM Plex Sans;
font-style: normal;
font-weight: 200;
font-size: 20px;
line-height: 26px;

color: #000000;

`

class PositionComponent extends React.Component <MyProps> {
  render() {
    return (
        <PositionP>
        {this.props.position}     
        </PositionP>
    );
  }
}

export default PositionComponent;