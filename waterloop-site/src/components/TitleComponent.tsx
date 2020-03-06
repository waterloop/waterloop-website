import React from "react";
import styled from "styled-components";
import "./styling/TestComponent.css";

type MyProps = {title: string};

const TitleH2 = styled.div`
font-family: IBM Plex Sans;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 31px;
color: #000000;
`

class TitleComponent extends React.Component <MyProps> {
  render() {
    return (
        <TitleH2>
        {this.props.title}    
        </TitleH2>
    );
  }
}

export default TitleComponent;
