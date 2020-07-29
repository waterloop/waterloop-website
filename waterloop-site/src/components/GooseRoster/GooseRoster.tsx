import React from "react";
import "../../theme/global.scss";

type imgProps = {
  imgUrls: string[];
  heading: string;
  description: string;
};

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
        <h2 className="GooseRoster-Heading">{this.props.heading}</h2>
        <div className="GooseRoster-Description">{this.props.description}</div>

        <div className="GooseRoster-ImageThumbnail">
          <button className="GooseRoster-Arrow" onClick={this.previousSlide}>
            &#9664;
          </button>
          <img
            className="GooseRoster-Img"
            src={this.props.imgUrls[this.state.currentImageIndex]}
            alt="goose rosters"
          ></img>
          <button className="GooseRoster-Arrow" onClick={this.nextSlide}>
            &#9654;
          </button>
        </div>
      </div>
    );
  }
}

export default GooseRoster;
