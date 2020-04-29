import React from "react";
import FooterComponent from "../sections/Footer/index";
import { BrowserRouter as Router } from "react-router-dom";
import Sponsors from "../components/Sponsors/Sponsors";
import Button from "../components/button/CTAButton";

class MainPage extends React.Component {
  render() {
    return (
      <Router>
        <Button
          backgroundColor="yellow"
          textColor="black"
          text="Send"
          onClick={() => {
            document.getElementById("submitBtn")?.click();
          }}
          variant={null}
        ></Button>
        <Sponsors></Sponsors>
        <FooterComponent />;
      </Router>
    );
  }
}

export default MainPage;
