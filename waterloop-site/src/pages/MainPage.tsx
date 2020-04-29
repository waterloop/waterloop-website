import React from "react";
import FooterComponent from "../sections/Footer/index";
import { BrowserRouter as Router } from "react-router-dom";
import Sponsors from "../components/Sponsors/index";
import Subteams from "../components/Teams";
import Button from "../components/button/CTAButton";
import Sample from "../static/img/logos/Icon_Yellow.png";
import Hero from "../components/Hero/Landing";
import Hero2 from "../components/Hero/General";

class MainPage extends React.Component {
  render() {
    return (
      <Router>
        <Subteams
          image={Sample}
          description="gjfdkbfdaf fndjsafjnkd fdsjakfndjksanjk nfjkdsnakf ndskanfjkdsanfjkdsanjfkdsankjfn"
          subteam="Electrical"
        ></Subteams>
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
