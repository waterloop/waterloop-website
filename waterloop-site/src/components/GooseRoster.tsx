import React from "react";
import styled from "styled-components";

const RosterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
`;

const Heading = styled.h2`
  font-style: italic;
  font-size: 28px;
  margin: 18px 0;
`;

const Description = styled.div`
  font-size: 16px;
`;

const ImageThumbnail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  height: 40vw;
  overflow: hidden;
  padding: 5px;
  margin: 20px 0;
`;

const Img = styled.img`
  width: 90vw;
`;

const Arrow = styled.button`
  all: unset;
  cursor: pointer;
  margin: 4px;
`;

type imgProps = {
  imgUrls: string[];
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
      <RosterWrapper>
        <Heading>Goose V</Heading>
        <Description>Some attractive description about how the goose is a magnificent animal.</Description>
        
        <ImageThumbnail>
          <Arrow onClick={ this.previousSlide }>
            &#9664;
          </Arrow>
          <Img src={ this.props.imgUrls[this.state.currentImageIndex] }></Img>
          <Arrow onClick={ this.nextSlide }>
            &#9654;
          </Arrow>
        </ImageThumbnail>
      </RosterWrapper>
    );
  }
}

export default GooseRoster;