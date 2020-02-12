import React from "react";
import styled from "styled-components";
import TestComponent from "../components/TestComponent"

class TestPage extends React.Component {
  render() {
    return (
      <div>
          <h1>Here's a test page</h1>
          <TestComponent
          title = "Test Button"
          link = "https://google.com"
          ></TestComponent>
      </div>
    );
  }
}

export default TestPage;
