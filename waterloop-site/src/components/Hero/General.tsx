import React from "react";
import DownArrowImg from "../../static/img/background/downArrow.svg";
import "../../theme/styles.scss";
import { Link } from "react-scroll";

type MyProps = { description: string; title: string; anchor: string };

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
        <Link to={this.props.anchor} smooth={true} duration={750}>
          <img
            className="generalDownArrow"
            src={DownArrowImg}
            alt="navigation arrow"
          />
        </Link>
      </div>
    );
  }
}

export default heroComponent;
