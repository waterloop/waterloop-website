import React from "react";
import styled from "styled-components";
import DownArrowImg from "../../static/img/background/downArrow.svg";
import "../../theme/Global.css";

type MyProps = { description: string; title: string };

class heroComponent extends React.Component<MyProps> {
  render() {
    return (
      <div className="generalContainer">
        <div className="generalTitleContainer">
          <h1>{this.props.title}</h1>
        </div>
        <div className="generalDescriptionContainer">
          <h3>{this.props.description}</h3>
        </div>
        <div className="generalArrowContainer">
          <img className="generalDownArrow" src={DownArrowImg}></img>
        </div>
      </div>
    );
  }
}

export default heroComponent;
