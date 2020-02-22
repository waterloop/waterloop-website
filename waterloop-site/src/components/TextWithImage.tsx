import React from "react"
import styled from "styled-components"
import "./styling/TextWithImage.css"

const TextBlock = styled.div`
  text-align: justify;
  width: 500px;
  height: 100%;
  padding-right: 3%;
  display: inline-block;
`;

const Img = styled.img`
  width: 250px;
  height: 220px;
  border-radius: 20pt;
`;

const LearnMoreBtn = styled.a`
  display: flex;
  justify-content: center;
  background-color: white;
  padding-left: 1%;
  padding-right: 1%;
  color: #A9A9A9;
  border-radius: 50pt;
  border: 2px solid #A9A9A9;
  height: 1%;
  width: 15%;
  text-decoration: none;
  font-size: 75%;
`;

const Header = styled.h2`
  font-style: italic;
`;

const Text = styled.p`
`;

type MyProps = {title: string, text: string, image: string, link: string};

class TextWithImage extends React.Component <MyProps> {

  render() {
    return (
      <div style={{textAlign: "center"}}>
        <TextBlock>
          <Header>{this.props.title}</Header>
          <Text>{this.props.text}</Text>
          <LearnMoreBtn target="_blank" href={this.props.link}>
            <Text>Learn More</Text>
          </LearnMoreBtn>
        </TextBlock>
        <Img src = {this.props.image} alt = "photo"></Img>
      </div>
    );
  }
}

export default TextWithImage
