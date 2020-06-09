import React from "react";
import styled from "styled-components";
import { Button } from 'components/Button/';

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 548px;
  height: 100%;
  padding-right: 3%;
  @media (max-width: 500px) {
    display: inline;
    padding-right: 0;
  }
`;

const Img = styled.img`
  display: flex;
  flex-direction: column;
  width: 525px;
  height: 408px;
  border-radius: 15px;
  @media (max-width: 500px) {
    display: none;
  }
`;

const Header = styled.h2`
  font-style: italic;
  font-family: 'IBM Plex Sans';
  font-size: 36px;
  @media (max-width: 500px) {
    margin-left: 25%;
    margin-right: 25%;
    text-align: center;
    font-size: 2.3vw;
  }
`;

const Text = styled.p`
  font-size: 20px;
  font-family: 'IBM Plex Sans';
  line-height: 1.5;
  @media (max-width: 500px) {
    margin-left: 10%;
    margin-right: 10%;
    text-align: center;
    font-size: 2vw;
  }
`;

const Block = styled.div`
  display: flex;
  align-self: !important center;
  justify-content: center;
  width: 100%;
  height: 408px;
  margin-bottom: 3em;
  margin-top: 2em;
`;

const ButtonBlock = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 2em;

`;

type MyProps = { title: string; text: string; image: string; };

export class TextWithImage extends React.Component<MyProps> {
  render() {
    return (
      <Block>
        <TextBlock>
          <Header>{this.props.title}</Header>
          <Text>{this.props.text}</Text>
          <ButtonBlock>
            <Button
              backgroundColor="yellow"
              textColor="black"
              text="LEARN MORE"
              onClick={() => window.open("the-flock")}
              variant={null}
            ></Button>
          </ButtonBlock>
        </TextBlock>
        <Img src={this.props.image} alt="photo"></Img>
      </Block >
    );
  }
}

