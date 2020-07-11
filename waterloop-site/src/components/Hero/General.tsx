import React from "react";
import DownArrowImg from "../../static/img/background/downArrow.svg";
import "../../theme/global.css";

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
          <img
            className="generalDownArrow"
            src={DownArrowImg}
            alt="navigation arrow"
          ></img>
        </div>
      </div>
    );
  }
}

export default heroComponent;
