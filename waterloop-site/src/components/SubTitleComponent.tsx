import React from "react";
import styled from "styled-components";
import "./styling/TestComponent.css";

type MyProps = {title: string};

const SubTitle2 = styled.div`
font-family: IBM Plex Sans;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 21px;
color: #000000;
`

class SubTitleComponent extends React.Component <MyProps> {
  render() {
    return (
        <SubTitle2>
        {this.props.title}    
        </SubTitle2>
    );
  }
}

export default SubTitleComponent;
