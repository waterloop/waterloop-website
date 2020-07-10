import React from "react";
import styled from "styled-components";
import "../../theme/Global.css";

type MyProps = { subteam: string; description: string; image: string };

class SubteamsOverview extends React.Component<MyProps> { //TODO test if it works after global styling
  render() {
    return (
      <div className="Block-Teams">
        <img className="Img-Teams" src={this.props.image} alt="photo"></img>
        <div className="TextBlock-Teams">
          <h2 className="Header-Teams">{this.props.subteam}</h2>
          <p className="Text-Teams">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default SubteamsOverview;
