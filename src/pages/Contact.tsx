import React from "react";
// import GoogleMapReact from "google-map-react";
import { ContactForm } from "components/ContactForm";
import Hero from "components/Hero/General";
// import { MAP } from "../config/map";
import "../theme/styles.scss";
import NewsletterSignUpForm from "components/NewsletterSignUpForm";

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

        <NewsletterSignUpForm/>

        <div className="locationContainer">
          <h3>Visit Us</h3>
          <table>
            <tbody>
              <tr><td>Engineering 5</td>                     <td>Mon - Fri: 9 am - 5 pm</td></tr>
              <tr><td>200 University Ave W.</td>             <td>Sat - Sun: Closed</td></tr>
              <tr>Waterloo, ON</tr>
              <tr>N2L 3G5</tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div >
);

export default Contact;
