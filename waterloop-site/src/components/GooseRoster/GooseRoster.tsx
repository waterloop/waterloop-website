import React from "react";
import styled from "styled-components";
import "../../theme/styles.scss";

type imgProps = {
  imgUrls: string[];
  heading: string;
  description: string;
};

const Arrow = styled.i`
  font-size: 48px;
  cursor: pointer;
  display: none;
  @media only screen and (min-width: 900px) {
    display: flex;
  }
`;

const ArrowMobile = styled.i`
  font-size: 48px;
  cursor: pointer;
  display: flex;
  @media only screen and (min-width: 900px) {
    display: none;
  }
`;

class GooseRoster extends React.Component<imgProps> {
  state = {
    currentImageIndex: 0,
  };

  previousSlide = () => {
    const { currentImageIndex } = this.state;
    const lastIndex =
      currentImageIndex === 0
        ? this.props.imgUrls.length - 1
        : currentImageIndex - 1;
    this.setState({
      currentImageIndex: lastIndex,
    });
  };

  nextSlide = () => {
    const { currentImageIndex } = this.state;
    const nextIndex =
      currentImageIndex === this.props.imgUrls.length - 1
        ? 0
        : currentImageIndex + 1;
    this.setState({
      currentImageIndex: nextIndex,
    });
  };

  render() {
    return (
      <div className="GooseRoster-RosterWrapper">
        <h2>{this.props.heading}</h2>
        <p> {this.props.description}</p>

        <div className="GooseRoster-ImageThumbnail">
          <Arrow className="material-icons" onClick={this.previousSlide}>
            keyboard_arrow_left
          </Arrow>
          <img
            className="GooseRoster-Img"
            src={this.props.imgUrls[this.state.currentImageIndex]}
            alt="goose rosters"
          ></img>
          <Arrow className="material-icons" onClick={this.nextSlide}>
            keyboard_arrow_right
          </Arrow>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <ArrowMobile
              className="material-icons"
              onClick={this.previousSlide}
            >
              keyboard_arrow_left
            </ArrowMobile>
            <ArrowMobile className="material-icons" onClick={this.nextSlide}>
              keyboard_arrow_right
            </ArrowMobile>
          </div>
        </div>
      </div>
    );
  }
}

export default GooseRoster;
