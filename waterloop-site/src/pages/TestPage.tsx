import React from "react";
import styled from "styled-components";
import TestComponent from "../components/TestComponent"
import TextWithImage from "../components/TextWithImage"

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
            title = "Our Goals"
            text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            image = "https://www.w3schools.com/w3css/img_lights.jpg"
            link = "https://google.com"
            />
      </div>
    );
  }
}

export default TestPage;
