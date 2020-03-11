import React from "react";
import styled from "styled-components";
import TestComponent from "../components/TestComponent"
import MainHero from "../components/heroComponent/mainHero"

class TestPage extends React.Component {
  render() {
    return (
      <div>
        {/* <h1>Here's a test page</h1>
        <TestComponent
          title="Test Button"
          link="https://google.com"
        ></TestComponent> */}
        <MainHero description="this is a description">
        </MainHero>
      </div >
    );
  }
}

export default TestPage;
