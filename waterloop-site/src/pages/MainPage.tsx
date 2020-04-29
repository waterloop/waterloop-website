import React from "react";
import FooterComponent from "../sections/Footer/index";
import { BrowserRouter as Router } from "react-router-dom";
import Sponsors from "../components/Sponsors/index";
import Subteams from "../components/Teams";
import ContactForm from "../components/ContactForm/index";
import NavBar from "../components/NavBar/index";
import Sample from "../static/img/logos/Icon_Yellow.png";
import Hero from "../components/Hero/Landing"
import Hero2 from "../components/Hero/General"

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar></NavBar>
        </Router>
        <Hero description="test"></Hero>
        <Hero2 title="test" description="test"></Hero2>
        <ContactForm desc="Desc" title="Send Us A Message"></ContactForm>
      </div>
    );
  }
}

export default MainPage;
