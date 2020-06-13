import React from "react";
import styled from "styled-components";
import "../../theme/global.css";


type imgProps = {
  imgUrls: string[];
  heading: string,
  description: string
};

class GooseRoster extends React.Component<imgProps> {
  state = {
    currentImageIndex: 0
  };

  previousSlide = () => {
    const { currentImageIndex } = this.state;
    const lastIndex = currentImageIndex == 0 ? this.props.imgUrls.length - 1 : currentImageIndex - 1;
    this.setState({
      currentImageIndex: lastIndex
    });
  }

  nextSlide = () => {
    const { currentImageIndex } = this.state;
    const nextIndex = currentImageIndex == this.props.imgUrls.length - 1 ? 0 : currentImageIndex + 1;
    this.setState({
      currentImageIndex: nextIndex
    });
  }

  render() {
    return (
      <div className="GlobalRoster-RosterWrapper">
        <h2 className="GlobalRoster-Heading">{this.props.heading}</h2>
        <div className="GlobalRoster-Description">{this.props.description}</div>

        <div className="GlobalRoster-ImageThumbnail">
          <button className="GlobalRoster-Arrow" onClick={this.previousSlide}>
            &#9664;
          </button>
          <img className="GlobalRoster-Img" src={this.props.imgUrls[this.state.currentImageIndex]}></img>
          <button className="GlobalRoster-Arrow" onClick={this.nextSlide}>
            &#9654;
          </button>
        </div>
      </div>
    );
  }
}

export default GooseRoster;
