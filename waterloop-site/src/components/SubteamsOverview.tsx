import React from "react"
import styled from "styled-components"

const TextBlock = styled.div`
  text-align: justify;
  width: 50%;
  height: 100%;
  padding-left: 3%;
  display: inline-block;
  @media (max-width: 500px){
    display: block;
    text-align: center;
    margin-left: 25%;
    padding-left: 0;
    margin-right: 25%;
  }
`;

const Img = styled.img`
  margin-top: 2%;
  width: 25%;
  height: 17vw;
  @media (max-width: 500px){
    width: 40%;
    height: 27vw;
  }
`;

const Header = styled.h2`
  font-style: italic;
  font-size: 1.7vw;
  @media (max-width: 500px){
    font-size: 2vw;
  }
`;

const Text = styled.p`
  font-size: 1.5vw;
`;

type MyProps = {subteam: string, description: string, image: string};

class SubteamsOverview extends React.Component <MyProps> {

  render() {
    return (
      <div id = "div" style={{textAlign: "center"}}>
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
