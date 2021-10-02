import React from "react";
import DownArrowImg from "../../static/img/background/downArrow.svg";
import "../../theme/styles.scss";
import { Link } from "react-scroll";
import { ReactElement } from "react";

type MyProps = { description: string; title: string; anchor: string };

class General extends React.Component<MyProps> {
  render(): ReactElement {
    return (
      <div className="generalContainer">
        <div className="generalTitleContainer">
          <h1 className="center-text">{this.props.title}</h1>
        </div>
        <div className="generalDescriptionContainer ">
          <h3 className="white-text center-text">{this.props.description}</h3>
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

export default General;
