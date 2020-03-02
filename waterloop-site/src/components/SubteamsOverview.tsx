import React from "react"
import styled from "styled-components"

const TextBlock = styled.div`
  text-align: justify;
  width: 500px;
  height: 100%;
  padding-left: 3%;
  display: inline-block;
`;

const Img = styled.img`
  width: 240px;
  height: 185px;
`;

const Header = styled.h2`
  font-style: italic;
  font-size: 125%;
`;

const Text = styled.p`
`;

type MyProps = {subteam: string, description: string, image: string};

class SubteamsOverview extends React.Component <MyProps> {

  render() {
    return (
      <div style={{textAlign: "center"}}>
        <Img src = {this.props.image} alt = "photo"></Img>
        <TextBlock>
          <Header>{this.props.subteam}</Header>
          <Text>{this.props.description}</Text>
        </TextBlock>
      </div>
    );
  }
}

export default SubteamsOverview;
