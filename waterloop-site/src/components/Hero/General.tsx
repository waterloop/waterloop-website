import React from "react";
import DownArrowImg from "../../static/img/background/downArrow.svg";
import "../../theme/global.scss";

type MyProps = { description: string; title: string };

class heroComponent extends React.Component<MyProps> {
  render() {
    return (
      <div className="generalContainer">
        <div className="generalFillerSpace"></div>
        <div className="generalTextContainer">
          <div className="generalTitleContainer">
            <h1>{this.props.title}</h1>
          </div>
          <div className="generalDescriptionContainer">
            <h3>{this.props.description}</h3>
          </div>
        </div>
        <div className="generalArrowContainer">
          <img
            className="generalDownArrow"
            src={DownArrowImg}
            alt="navigation arrow"
          />
        </div>
      </div>
    );
  }
}

export default heroComponent;
