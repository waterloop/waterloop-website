import React from "react";
import styled from "styled-components";
import { ContactUsForm } from "../components/contact-form/contact-form";
import TestComponent from "../components/TestComponent"
import TextWithImage from "../components/TextWithImage"
import TextWithImageData from "../components/json/TextWithImage.json"
import Sponsors from "../components/Sponsors"
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

        <ContactUsForm
          desc="Desc"
          title="Send Us A Message"
        ></ContactUsForm>
      </div>
    );
  }
}

export default TestPage;
