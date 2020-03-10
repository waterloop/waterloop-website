import React from "react";
import styled from "styled-components";
import TestComponent from "../components/TestComponent"
import TextWithImage from "../components/TextWithImage"
import TextWithImageData from "../components/json/TextWithImage.json"
import SubteamsOverview from "../components/SubteamsOverview"

var title = "";
var text = "";
var image = "";
var link = "";

{
  TextWithImageData.map((detail) => {
    title = detail.title;
    text = detail.text;
    image = detail.image;
    link = detail.link;
  })
}

class TestPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Here's a test page</h1>
        <TestComponent
          title="Test Button"
          link="https://google.com"
        ></TestComponent>

        <TextWithImage
          title={title}
          text={text}
          image={image}
          link={link}
        />
        <SubteamsOverview
          subteam="Mechanical"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          image="https://www.w3schools.com/w3css/img_lights.jpg"
        ></SubteamsOverview>
      </div >
    );
  }
}

export default TestPage;
