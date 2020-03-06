import React from "react";
import styled from "styled-components";
import "./styling/TestComponent.css";

type MyProps = {position: string};

const SubPositionP = styled.div`
font-family: IBM Plex Sans;
font-style: normal;
font-weight: 200;
font-size: 14px;
line-height: 18px;
color: #000000;
`

class SubPositionComponent extends React.Component <MyProps> {
  render() {
    return (
        <SubPositionP>
        {this.props.position}     
        </SubPositionP>
    );
  }
}

export default SubPositionComponent;