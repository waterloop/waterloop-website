import React from "react";
import styled from "styled-components";
import FooterComponent from "../components/FooterComponent";
import { BrowserRouter as Router } from "react-router-dom";
import PositionPosting from "../components/recruitment_form_component/PositionPosting";
import Form from "../components/recruitment_form_component/Form";

const ContentWrapper = styled.div`
  position: relative;
`;

class MainPage extends React.Component {
  render() {
    return (
      <div>

        <PositionPosting
          role ="Goose Designer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          skills = "JavaScript, Goose Handling, Creativity"
          technicalQ = "How would you design a nest?"
          termList = {["F19", "W20", "S20", "F20", "W21"]}
        ></PositionPosting>
        <PositionPosting
          role ="Goose Destroyer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          skills = "JavaScript, Goose Handling, Resilience"
          technicalQ = "What is the most deadly feature of a goose?"
          termList = {["F19", "W20", "S20", "F20", "W21"]}
        ></PositionPosting>
        <PositionPosting
          role ="Goose Whisperer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          skills = "JavaScript, Goose Handling, Patience"
          technicalQ = "Demonstrate a time you translated geese language"
          termList = {["F19", "W20", "S20", "F20", "W21"]}
        ></PositionPosting>
        <PositionPosting
          role ="Goose Babysitter"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          skills = "JavaScript, Goose Handling, Kindness"
          technicalQ = "How would you care for the geese in Waterloo?"
          termList = {["F19", "W20", "S20", "F20", "W21"]}
        ></PositionPosting>

        <Router>
          <FooterComponent />;
        </Router>
      </div>
    );
  }
}

export default MainPage;
