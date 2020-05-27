import React from "react";
import styled from "styled-components";

const TextBlock = styled.div`
  text-align: justify;
  width: 50%;
  height: 100%;
  padding-right: 3%;
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    display: inline;
    padding-right: 0;
  }
`;

const Img = styled.img`
  display: flex;
  flex-direction: column;
  width: 25vw;
  height: auto;
  border-radius: 20pt;
  margin-top: 3%;
  @media (max-width: 500px) {
    display: none;
  }
`;

const Header = styled.h2`
  font-style: italic;
  font-size: 1.7vw;
  @media (max-width: 500px) {
    margin-left: 25%;
    margin-right: 25%;
    text-align: center;
    font-size: 2.3vw;
  }
`;

const Text = styled.p`
  font-size: 18px;
  @media (max-width: 500px) {
    margin-left: 10%;
    margin-right: 10%;
    text-align: center;
    font-size: 2vw;
  }
`;

const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

type MyProps = { title: string; text: string; image: string; link: string };

export class TextWithImage extends React.Component<MyProps> {
  render() {
    return (
      <Block>
        <TextBlock>
          <Header>{this.props.title}</Header>
          <Text>{this.props.text}</Text>
          {/* Import button component */}
        </TextBlock>
        <Img src={this.props.image} alt="photo"></Img>
      </Block>
    );
  }
}

