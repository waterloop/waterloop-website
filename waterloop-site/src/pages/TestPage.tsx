import React from "react";
import styled from "styled-components";
import TestComponent from "../components/TestComponent"
import TextWithImage from "../components/TextWithImage"
import TextWithImageData from "../components/json/TextWithImage.json"

var title = "";
var text = "";
var image = "";
var link = "";

{TextWithImageData.map((detail) =>{
  title = detail.title;
  text = detail.text;
  image = detail.image;
  link = detail.link;
})}

class TestPage extends React.Component {
  render() {
    return (
      <div>
          <h1>Here's a test page</h1>
          <TestComponent
            title = "Test Button"
            link = "https://google.com"
          ></TestComponent>

          <TextWithImage
            title = {title}
            text = {text}
            image = {image}
            link = {link}
            />
      </div>
    );
  }
}

export default TestPage;
