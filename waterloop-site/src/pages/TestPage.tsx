import React from "react";
import styled from "styled-components";
import TestComponent from "../components/TestComponent";
import { ContactUsForm } from "../components/contact-form/contact-form";

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
