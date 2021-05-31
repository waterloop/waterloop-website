import React from "react";
// import GoogleMapReact from "google-map-react";
import { ContactForm } from "components/ContactForm";
import Hero from "components/Hero/General";
// import { MAP } from "../config/map";
import "../theme/styles.scss";

const Contact: React.FC = () => (
  <div>
    <Hero
      title="CONTACT"
      description="We'd love to get in touch!"
      anchor="#contact-form"
    ></Hero>

    <div id={"#contact-form"}></div>
    <div className="pageContainer">
      <div className="contactFormContainer">

        <ContactForm
          title="Send Us a Message"
          desc="Want to get in touch? Submit this form or drop us a message at contact@waterloop.ca"
        ></ContactForm>

        <ContactForm
          title = "Sign Up for our Newsletter"
          desc = "Want to sign up for our newsletter? Sign up for the form below"
          ></ContactForm>

        <div className="locationContainer">
          <h3>Visit Us</h3>
          <p>
            Engineering 5                     Mon - Fri: 9 am - 5 pm
            200 University Ave W.             Sat - Sun: Closed
            Waterloo, ON
            N2L 3G5
          </p>
        </div>
      </div>
    </div>
  </div >
);

export default Contact;
