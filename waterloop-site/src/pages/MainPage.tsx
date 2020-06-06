import React from "react";
import FooterComponent from "../sections/Footer/index";
import { BrowserRouter as Router } from "react-router-dom";
import {Sponsors} from "components/Sponsors";
import {SubTeam} from "components/Teams";
import {ContactForm} from "components/ContactForm";
import {NavBar} from "components/NavBar";
import Sample from "static/img/logos/Icon_Yellow.png";
import Hero from "components/Hero/Landing"
import Hero2 from "components/Hero/General"
import {SimpleFeatures} from "sections/FeaturedComponent/index"

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar></NavBar>
        </Router>
        <SimpleFeatures></SimpleFeatures>
        <ContactForm title='Some Title' desc='SomeValuehere'></ContactForm>
      </div>
    );
  }
}

export default MainPage;
