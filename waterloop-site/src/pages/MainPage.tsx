import React from "react";
import FooterComponent from "../sections/Footer/index";
import { BrowserRouter as Router } from "react-router-dom";
import Sponsors from "../components/Sponsors/index";
import Subteams from "../components/Teams";
import NavBar from "../components/NavBar/index";
import Sample from "../static/img/logos/Icon_Yellow.png";

class MainPage extends React.Component {
  render() {
    return (
      <Router>
        <NavBar></NavBar>
      </Router>
    );
  }
}

export default MainPage;